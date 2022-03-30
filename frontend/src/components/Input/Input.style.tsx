import styled from "styled-components";

type Props = {
    width ?: string
    backgroundColor ?: string;
    color ?:string;
    addStyles ?:string;
}

export const InputElement = styled.input<Props>`
    width: ${props => props.width || '70%'};
    background-color: ${props => props.backgroundColor || 'white'};
    outline: 0;
    border: none;
    border-radius: .5rem;
    padding: 1rem;

    ${props => props.addStyles || ''};

    &::placeholder {
    color: ${props => props.color || '#4abdac'};
    font-size: 1rem;
  }

  &:focus {
    background-color: ${props => props.color || '#4abdac' };
    color: ${props => props.backgroundColor || 'white'};;

    &::placeholder {
      color: ${props => props.backgroundColor || 'white'};;
    }
  }
`