import styled from "styled-components";

type Props = {
    height ?: string;
    addStyle ?: string 
}
export const ContainerElement = styled.div<Props>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${props => props.height || 'auto'};

  @media (min-width: 980px){
    flex-direction: row;
  }
  
  ${props => props.addStyle || ''}
`;
