import { screen, render } from "@testing-library/react";
import * as React from "react";
import InputArea from "../../pages/Todo/InputArea";

import userEvent from "@testing-library/user-event";

const onAddTask = jest.fn();
describe("InputArea tests", () => {
  beforeEach(() => {
    onAddTask.mockClear();
    expect(render(<InputArea onAddTask={onAddTask} />));
  });
  test("should be rendered", () => {
    expect(render(<InputArea onAddTask={onAddTask} />));
  });

  test("Input text should be visible", () => {
    const input = screen.getByPlaceholderText("Descrição da tarefa...");
    expect(input).toBeVisible();
  });
  test("Button add task should be visible", () => {
    const button = screen.getByText("Adicionar");
    expect(button).toBeVisible();
  });

  test("testing user add task with button", () => {
    const input = screen.getByPlaceholderText("Descrição da tarefa...");
    const button = screen.getByText("Adicionar");

    userEvent.type(input, "teste");
    userEvent.click(button);

    expect(onAddTask).toBeCalledTimes(1);
  });
  test("testing user add task with enter", () => {
    const input = screen.getByPlaceholderText("Descrição da tarefa...");

    userEvent.type(input, "teste");
    userEvent.keyboard("{enter}");

    expect(onAddTask).toHaveBeenCalledTimes(1);
  });
  test("testing user add task with enter", () => {
    const input = screen.getByPlaceholderText("Descrição da tarefa...");
    const button = screen.getByText("Adicionar");

    userEvent.type(input, " ");
    userEvent.click(button);
    expect(onAddTask).not.toBeCalled();
  });
});
