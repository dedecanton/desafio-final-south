import * as React from "react";
import { useContext, useState} from "react";
import { AuthContext } from "../../context/auth-context";

// Components
import Container from "../../components/Container";
import LoginImage from "../../pages/Auth/LoginImage";
import InputArea from "../../pages/Auth/InputArea";

import { BackgroundLogin } from './AuthContainer.style'

const AuthContainer: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('') 
  const [userPassword, setUserPassword] = useState('') 



  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if(userEmail.trim().length > 0 && userPassword.trim().length > 0 ){
        authCtx.login(Math.random().toString().replace(".", ""));
    }
  };

  const changeEmailHandler = (email:string) => {
    setUserEmail(email)
  }

  const changePasswordHandler = (password:string) => {
    setUserPassword(password)
  } 


  return (
    <Container height="100vh">
      <BackgroundLogin>
        <LoginImage />
      </BackgroundLogin>
      <InputArea onLogin={loginHandler} onChangeEmail={changeEmailHandler} onChangePassword={changePasswordHandler}   />
    </Container>
  );
};

export default AuthContainer;
