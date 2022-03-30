/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import ListItem from "../ListItem";

// types
import { ListItemType } from "../../../types/ListItem.type";

// components
import Container from "../../../components/Container";


type Props = {
  taskList: ListItemType[];
  onTaskChange: (id: string, done: boolean) => void;
  onTaskRemove: (id: string) => void;
};

const ListArea = ({ taskList, onTaskChange, onTaskRemove }: Props) => {
  const onChange = (id: string, done: boolean) => {
    onTaskChange(id, done);
  };

  const onRemove = (id: string) => {
    onTaskRemove(id);
  };

  const addStylesContainer = `
    margin: 1rem auto;
    background-color: #fff;
    max-width:  900px;
    width: 95%;
    flex-direction: column;
    justify-content: center;
    border: 2px solid #4abdac;
    border-radius: 0.5rem;
    padding: 1rem;
    text-align:center;
    position: relative;
    z-index: 999;
    ul{
      width: 100%
    }

    h2{
      color: black;
      font-size: 1.2rem;
    }

    @media (min-width:980px){
      flex-direction:column;
    }
  `;

  return (
    <Container addStyle={addStylesContainer}>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <ListItem
            onRemove={onRemove}
            onChange={onChange}
            key={index}
            item={task}
          />
        ))
      ) : (
        <h2>Nenhuma tarefa cadastrada</h2>
      )}
    </Container>
  );
};

export default ListArea;
