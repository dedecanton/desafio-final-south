import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import "./reset.css";

//context
import { AuthProvider } from "./context/auth-context";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container as HTMLDivElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
