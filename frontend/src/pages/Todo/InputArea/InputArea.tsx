/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import React, { KeyboardEvent, useState } from "react";

// components
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Container from "../../../components/Container";

type Props = {
  onAddTask: (text: string) => void;
};

const InputArea = ({ onAddTask }: Props) => {
  const [inputContent, setInputContent] = useState("");

  const handleSubmit = () => {
    if (!(inputContent.trim().length > 0)) return;

    onAddTask(inputContent);
    setInputContent("");
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === "Enter" && inputContent.trim().length > 0) {
      onAddTask(inputContent);
      setInputContent("");
    }
  };

  const addStylesContainer = `
  flex-direction: column;
    margin: 1rem auto;
    margin-top: 6rem;
    max-width: 900px;
    justify-content: center;
    align-items:center;
  `;

  return (
    <Container addStyle={addStylesContainer}>
      <Input
        addStyles="border: 2px solid #4abdac; margin-bottom: .5rem; @media (min-width:980px){width:70%; margin-bottom: 0}"
        type="text"
        width="90%"
        placeholder="Descrição da tarefa..."
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        onKeyPress={handleKeyUp}
      />
      <Button
        backgroundColor="#4abdac"
        color="#fff"
        addStyle="margin-left: 1rem; padding: .9rem;"
        type="button"
        onClick={handleSubmit}
        text="Adicionar"
      />
    </Container>
  );
};

export default InputArea;
