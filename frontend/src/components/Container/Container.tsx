/* eslint-disable  @typescript-eslint/no-explicit-any */

import * as React from 'react';
import {ContainerElement} from './Container.style'

type ContainerProps = {
    height ?: string;
    addStyle ?: string;
    children: JSX.Element | JSX.Element[]
}

const Container = (props:ContainerProps):any => (
    <ContainerElement {...props}>
        {props.children}
    </ContainerElement>
)

export default Container