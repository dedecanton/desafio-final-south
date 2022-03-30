import React, { createContext, useState, useCallback, useEffect } from "react";
/* eslint-disable  @typescript-eslint/no-empty-function */
/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
// import { Context } from "vm";
// import { useEffect } from 'react';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const AuthContext = createContext({
  isLoggedIn: false,
  login: (email: string, password: string) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");

  return { token: storedToken };
};

const AuthProvider: React.FC = ({ children }) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [userIsLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    signOut(auth)
    setToken(null)
  }, []);

  const loginHandler = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => userData.user.getIdTokenResult())
      .then((token) => {
        const userToken = token.token;
        setToken(userToken);
        localStorage.setItem("token", userToken);
      })
      .catch((err) => console.log(err.message));
  };

  const authContextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
