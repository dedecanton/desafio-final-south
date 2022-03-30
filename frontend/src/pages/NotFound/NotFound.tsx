import * as React from "react";

// Components
import Container from "../../components/Container";
import { Title } from "./NotFound.style";

// images
import NotFoundImage from "./NotFoundImage";

const NotFound: React.FC = () => {
  return (
    <Container
      height="100vh"
      addStyle={`margin:0 auto; 
      text-align: center;
      flex-direction: column;
      background-color: #4abdac;
      justify-content:center;
      align-items:center;

      svg{
        width:90%;
        height: auto;
      }
      
      @media (min-width: 980px){
        flex-direction: column;

        svg{
          height: 60%;
        }
      }
      `}
    >
      <Title>Ops! Página&nbsp;não&nbsp;encontrada!</Title>
      <NotFoundImage />
    </Container>
  );
};

export default NotFound;
