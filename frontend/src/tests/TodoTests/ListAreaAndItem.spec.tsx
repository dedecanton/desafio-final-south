import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import ListArea from "../../pages/Todo/ListArea";

const onTaskChange = jest.fn();
const onTaskRemove = jest.fn();

describe("ListArea tests", () => {
  beforeEach(() => {
    render(
      <ListArea
        onTaskChange={onTaskChange}
        onTaskRemove={onTaskRemove}
        taskList={[
          { done: true, name: "checked", id: "1" },
          { done: true, name: "checked", id: "2" },
          { done: true, name: "checked", id: "2" },
          { done: false, name: "uncheked", id: "3" },
        ]}
      />
    );
  });

  test("should show 4 listItems", () => {
    const li = screen.getAllByRole("listitem");
    expect(li).toHaveLength(4);
  });

  test("should show 4 checkbox", () => {
    const checkbox = screen.getAllByRole("checkbox");
    expect(checkbox).toHaveLength(4);
  });

  test("should show 4 removeButtons", () => {
    const removeButtons = screen.getAllByText("Remover da lista");
    expect(removeButtons).toHaveLength(4);
  });

  test("on button click should call onTaskRemove function", () => {
    const removeButton = screen.getAllByText("Remover da lista")[2];
    userEvent.click(removeButton);
    expect(onTaskRemove).toBeCalledTimes(1);
  });

  test("on checkbox click should call onTaskChange function", () => {
    const checkbox = screen.getAllByRole("checkbox")[3];
    userEvent.click(checkbox);
    expect(onTaskChange).toBeCalledTimes(1);
  });

  test('item checked, label should have class "checked"', () => {
    const label = screen.getAllByText("checked")[0];
    expect(label).toHaveClass("checked");
  });

  test('should not show text "Nenhuma tarefa cadastrada"', () =>{
    expect(screen.queryByText('Nenhuma tarefa cadastrada')).toBeNull()
  } )
});

describe("ListArea and ListItem tests without data", () => {
  test("without data should shouw text 'Nenhuma tarefa cadastrada' ", () => {
    render(
      <ListArea
        onTaskChange={onTaskChange}
        onTaskRemove={onTaskRemove}
        taskList={[]}
      />
    );

    expect(screen.getByText('Nenhuma tarefa cadastrada')).toBeVisible()
  });
});
