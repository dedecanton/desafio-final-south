import Button from "../../components/Button";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from 'react';


describe('test Button component', () => {
    test('click on button should call function', () => {
        const clickFunction = jest.fn()
        render (<Button text="teste" onClick={clickFunction} />) 
        const button = screen.getByRole('button')
        userEvent.click(button)

        expect(clickFunction).toHaveBeenCalledTimes(1)
    })
})