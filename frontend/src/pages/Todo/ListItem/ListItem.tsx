/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import React from "react";
import { ListItemType } from "../../../types/ListItem.type";

import Button from "../../../components/Button";
// import Container from "../../../components/Container";

import {Container} from './ListItem.style'

type Props = {
  item: ListItemType;
  onChange: (id: string, done: boolean) => void;
  onRemove: (id: string) => void;
};

const ListItem = ({ item, onChange, onRemove }: Props) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    const id = item.id;
    onChange(id, value);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  const addStyleButton = `
    width:100%;
    padding: .5rem 1rem;
    margin-top: .5rem;

    @media (min-width:980px){
        width: initial;
        position: absolute;
        right:2%;
        margin-top: 0;
    }
}
  `;

  return (
    <Container >
      <input
        type="checkbox"
        checked={item.done}
        name="isChecked"
        id={item.id}
        onChange={handleCheck}
      />
      <label className={item.done ? "checked" : ""} htmlFor={item.id}>
        {item.name}
      </label>
      <Button
        addStyle={addStyleButton}
        backgroundColor="#4abdac"
        color="#fff"
        text="Remover da lista"
        onClick={handleRemove}
      />
    </Container>
  );
};

export default ListItem;
