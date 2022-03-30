import React, { useContext } from "react";


// context
import { AuthContext } from "./context/auth-context";


// routes
import {
  AuthenticatedRoutes,
  UnauthenticatedRoutes,
} from "./routes/App.routes";

const App: React.FC = () => {

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;
