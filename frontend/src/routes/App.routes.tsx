/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Navigate, Route, Routes } from "react-router";
import * as React from "react";

import AuthContainer from '../container/AuthContainer'
// import Todo from "../pages/Todo";
import TodoContainer from "../container/TodoContainer";
import NotFound from "../pages/NotFound";
import NotAuthorized from "../pages/NotAuthorized";
import { BrowserRouter } from "react-router-dom";

export const UnauthenticatedRoutes = (): any => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='auth' />} />
        <Route path="/auth" element={<AuthContainer />} />
        <Route path="/todo" element={<Navigate to="/not-authorized" />} />
        <Route path="/not-authorized" element={<NotAuthorized />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' /> }/>
      </Routes>
    </BrowserRouter>
  );
};

export const AuthenticatedRoutes = (): any => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/todo' />} />
        <Route path="/auth" element={<Navigate to="/" />} />
        <Route path="/todo" element={<TodoContainer />} />
        <Route path="/not-authorized" element={<NotAuthorized />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path='*' element={<Navigate to='/not-found' /> }/>
      </Routes>
    </BrowserRouter>
  );
};
