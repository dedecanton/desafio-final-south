import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import InputArea from "../../pages/Auth/InputArea";

const onLogin = jest.fn(e => e.preventDefault());
const onChangeEmail = jest.fn();
const onChangePassword = jest.fn();

describe("Auth tests", () => {

    beforeEach(() => {
        render(
            <InputArea
              onLogin={onLogin}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
            />
          );
    })

  test('text "Que bom que você voltou" should be visible!', () => {
    expect(screen.getByText("Que bom que você voltou!")).toBeVisible()
  });

  test('on change email input, should call onChangeEmail', async () => {
      const user = userEvent.setup()
      const emailInput = screen.getByLabelText('Email')
      await user.type(emailInput, 'teste')

      expect(onChangeEmail).toBeCalledTimes(5)
  })

  test('on change password input, should call onChangeEmail', async () => {
    const user = userEvent.setup()
      const passwordInput = screen.getByLabelText('Senha')
      await user.type(passwordInput, 'teste')

      expect(onChangePassword).toBeCalledTimes(5)
  })

  test('on button click, should call onLogin', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('Entrar')
    await user.click(button)
    expect(onLogin).toBeCalledTimes(1)
})

test('submit without data', () => {
  const button = screen.getByText('Entrar')
  userEvent.click(button)
  
})

});
