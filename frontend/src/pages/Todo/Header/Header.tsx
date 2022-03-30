/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./Header.style";

// Components
import Container from "../../../components/Container";
import Button from "../../../components/Button";

// Context
import { AuthContext } from "../../../context/auth-context";

const addContainerStyles = `
align-items: center;
justify-content: space-between;
width: 95%;
flex-direction: row;
button{
  padding .8rem 2rem;
}
`;

const Header = () => {
  const authCtx = useContext(AuthContext);
  const logout = authCtx.logout;

  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/auth", { replace: true });
  };

  <button onClick={logoutHandler}>Logout</button>;
  return (
    <C.Header>
      <Container addStyle={addContainerStyles}>
        <C.HeaderLogo>To-do List</C.HeaderLogo>
        <Button
          onClick={logoutHandler}
          text="Logout"
          backgroundColor="#4abdac"
          color="#fff"
        />
      </Container>
    </C.Header>
  );
};

export default Header;
