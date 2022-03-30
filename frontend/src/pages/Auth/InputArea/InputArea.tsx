/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useRef} from "react";

import { Title, Form, InputGroup, Label, InputAreaContainer, Input } from "./InputArea.style";

// import Input from "../../../components/Input";
import Button from "../../../components/Button";

type InputAreaProps = {
    onLogin: (event: React.FormEvent) => void;
    onChangeEmail: (email:string) => void;
    onChangePassword: (password:string) => void;
}

const InputArea = ({onLogin, onChangeEmail, onChangePassword}:InputAreaProps):any => {


    const emailTyped = useRef<HTMLInputElement>(null)
    const passwordTyped = useRef<HTMLInputElement>(null);

    function changeEmail(){
        onChangeEmail(emailTyped.current!.value)
    }
    
    function changePassword(){
        onChangePassword(passwordTyped.current!.value)
    }


    return(
        <InputAreaContainer>
        <Title>Que bom que você voltou!</Title>
        <Form onSubmit={onLogin}>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="exemplo@exemplo.com"
              id="email"
              type="email"
              ref={emailTyped}
            //   value={emailTyped}
              onChange={changeEmail}
            />
          </InputGroup>
    
          <InputGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              placeholder="Insira sua senha"
              id="password"
              type="password"
              ref={passwordTyped}
            //   value={passwordTyped}
              onChange={changePassword}
            />
          </InputGroup>
          <Button
            width="90%"
            addStyle="@media (min-width:980px){width: 10rem} margin-top: .5rem;"
            text="Entrar"
            type="submit"
          />
        </Form>
      </InputAreaContainer>
    );

};

export default InputArea;
