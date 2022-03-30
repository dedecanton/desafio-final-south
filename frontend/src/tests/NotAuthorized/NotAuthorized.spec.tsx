import { render, screen } from "@testing-library/react";
import NotAuthorized from '../../pages/NotAuthorized'
import * as React from 'react';


describe('NotAuthorized page tests', () => {

    test('Should show text "Ops! Acesso negado!"', () => {
        render(<NotAuthorized />) 
        expect(screen.getByText("Ops! Acesso negado!")).toBeVisible()
    })
})