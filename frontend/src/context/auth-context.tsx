import React, { createContext, useState, useCallback, useEffect } from "react";
/* eslint-disable  @typescript-eslint/no-empty-function */
/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
// import { Context } from "vm";
// import { useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase.config";

const AuthContext = createContext({
  isLoggedIn: false,
  login: (email: string, password: string) => {},
  logout: () => {},
  loginGoogle: () => {}
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

  const loginGoogleHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const token = credential!.accessToken;
      if(typeof token !== 'string'){
        throw new Error('invalid token')
      }
      setToken(token);
      localStorage.setItem("token", token);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const authContextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    loginGoogle: loginGoogleHandler
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
