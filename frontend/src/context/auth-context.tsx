import React, { createContext, useState, useCallback, useEffect } from "react";
/* eslint-disable  @typescript-eslint/no-empty-function */
/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
// import { Context } from "vm";
// import { useEffect } from 'react';



const AuthContext = createContext({
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {}
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

  const [userIsLoggedIn, setIsLoggedIn] = useState(!!token)
  
  useEffect(()=> {
    setIsLoggedIn(!!token)
  }, [token])


  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);

    // history.push('/')
    // setLoggedIn(false);
  }, []);

  const loginHandler = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
    // setLoggedIn(true);
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
