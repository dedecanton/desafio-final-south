/* eslint-disable @typescript-eslint/no-explicit-any */

import { screen, render } from "@testing-library/react";
import * as React from 'react';
import userEvent from '@testing-library/user-event'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


import Header from '../../pages/Todo/Header'

beforeEach(() => {
    render(<Header />)
})

describe('Todo Tests', () => {
    test('Header should be visible', () => {
        const header = screen.getByRole('banner')
        expect(header).toBeVisible()
    })

    test('click on logout button should call function onclick', () => {
        const button = screen.getByRole('button')
        const handleClick = jest.fn()
        button.onclick = handleClick

        userEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    test('logo should be visible', () => {
        const logo = screen.getByText('To-do List')
        expect(logo).toBeVisible()
    })
})