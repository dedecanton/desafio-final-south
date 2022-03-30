import { render, screen } from "@testing-library/react";
import NotFound from '../../pages/NotFound'
import * as React from 'react';


describe('NotFound page tests', () => {

    test('Should show text "Ops! Página não encontrada!"', () => {
        render(<NotFound />) 
        expect(screen.getByText('Ops! Página não encontrada!')).toBeVisible()
    })
})