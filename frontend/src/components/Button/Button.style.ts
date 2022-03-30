import styled from "styled-components";

type Props = {
  addStyle ?:string
  color ?: string;
  backgroundColor ?: string;
  width ?: string
};

export const ButtonElement = styled.button<Props>`
  padding: 1rem;
  width: ${props => props.width || ''};
  outline: none;
  border: 2px solid ${props => props.color || '#4abdac'};
  background-color: ${props => props.backgroundColor || '#fff' };
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${props => props.color || '#4abdac'};
  font-weight: bold;
  transition: all ease 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: ${props => props.color || '#4abdac'};
    color: ${props => props.backgroundColor || '#fff' };
    border-color: ${props => props.backgroundColor || '#fff'};
    transform: scale(1.1);
  }

  ${props => props.addStyle}
`;
