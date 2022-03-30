import { screen, render } from "@testing-library/react";
import * as React from "react";
import InfoArea from "../../pages/Todo/InfoArea";

describe("InfoArea tests with data", () => {
  test('taskList = [] should return "Tarefas a fazer: 0" and "Tarefas feitas: 0"', () => {
    render(<InfoArea taskList={[]} />);
    expect(screen.getAllByText("0")).toHaveLength(2);
  });

  test('taskList with 2 checkeds tasks and 1 unchecked should return "Tarefas a fazer: 2" and "Tarefas feitas: 1"', () => {
    render(
      <InfoArea
        taskList={[
          { done: true, name: "checked", id: "1" },
          { done: true, name: "checked", id: "2" },
          { done: false, name: "uncheked", id: "3" },
        ]}
      />
    );
    expect(screen.getAllByText("2")).toHaveLength(1);
    expect(screen.getAllByText("1")).toHaveLength(1);
  });
});
  test('taskList with 3 checkeds tasks and 5 unchecked should return "Tarefas a fazer: 2" and "Tarefas feitas: 1"', () => {
    render(
      <InfoArea
        taskList={[
          { done: true, name: "checked", id: "1" },
          { done: true, name: "checked", id: "2" },
          { done: true, name: "checked", id: "2" },
          { done: false, name: "uncheked", id: "3" },
          { done: false, name: "uncheked", id: "4" },
          { done: false, name: "uncheked", id: "5" },
          { done: false, name: "uncheked", id: "6" },
          { done: false, name: "uncheked", id: "7" },
        ]}
      />
    );
    expect(screen.getAllByText("3")).toHaveLength(1);
    expect(screen.getAllByText("5")).toHaveLength(1);
});



