import * as React from 'react';
import { screen, render } from '@testing-library/react';
import TodoImage from '../../pages/Todo/TodoImage';

describe('TodoImage tests', () => {
    test('should render', () => {
        expect(render(<TodoImage />))
        expect(screen.getByTestId('svg')).toBeVisible()
    })
})