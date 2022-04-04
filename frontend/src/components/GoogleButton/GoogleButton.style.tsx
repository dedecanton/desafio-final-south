import styled from "styled-components";

export const Button = styled.button`
    margin: 1rem auto;
    background: white;
    border: none;
    outline: none;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease;
    
    svg{
        font-size: 1.5rem;
    }

    span{
        font-size: 1rem;
        margin-left: .5rem;
        color: #4e4e4e;
    }

    &:hover{
      transform: scale(1.1);  
    }
`