import * as React from 'react';
import { screen, render } from '@testing-library/react';
import AuthLoginImage from '../../pages/Auth/LoginImage'

describe('TodoImage tests', () => {
    test('should render', () => {
        expect(render(<AuthLoginImage />))
        expect(screen.getByTestId('authLoginImage')).toBeVisible()
    })
})