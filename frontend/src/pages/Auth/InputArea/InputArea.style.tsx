import styled from "styled-components";

export const InputAreaContainer = styled.div`
  background-color: #fff;
  margin: 0 auto;
  height: 70%;
  text-align: center;
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 980px){
    height: auto;
    width: 60%;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #4abdac;
  font-style: italic;
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  justify-content: center;
  
  @media (min-width:980px){
    margin-top: 5rem;
    width: 80%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  align-items: center;
  width: 95%;
  
  @media (min-width: 980px){
    width: 80%;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #4abdac;
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: #fff;
  margin-top: 0.8rem;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #4abdac;
  border-radius: 0.5rem;
  padding: 0.8rem;



  &::placeholder {
    color: #4abdac;
    font-size: 1rem;
    text-align: center;
  }

  &:focus {
    background-color: #4abdac;
    color: white;

    &::placeholder {
      color: white;
    }
  }

  @media (min-width: 980px){
    width: 70;

    &::placeholder{
      text-align: left;
    }
  }
`;
