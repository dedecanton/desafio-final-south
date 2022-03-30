/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import { addStyle } from "./InfoArea.style";
import { ListItemType } from "../../../types/ListItem.type";

import Container from "../../../components/Container";

type Props = {
  taskList: ListItemType[];
};

const InfoArea = ({ taskList }: Props) => {
  const taskListFilter = (state: boolean) =>
    taskList.filter((task) => task.done === state).length;

  return (
    <Container  addStyle={addStyle}>
      <table>
        <thead>
          <tr>
            <th>Tarefas a fazer</th>
            <th>Tarefas feitas</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{taskListFilter(false)}</td>
            <td>{taskListFilter(true)}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default InfoArea;
