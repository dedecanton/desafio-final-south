import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './reset.css'

//context
import { AuthProvider } from "./context/auth-context";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
