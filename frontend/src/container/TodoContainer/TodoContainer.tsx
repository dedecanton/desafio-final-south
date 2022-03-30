/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable  react-hooks/exhaustive-deps */

// import * as React from 'react';
import React, { useEffect, useState } from "react";

// types
import { ListItemType } from "../../types/ListItem.type";

// API
import useApi from "../../services/useApi";

// Components
import Header from "../../pages/Todo/Header";
import InputArea from "../../pages/Todo/InputArea";
import ListArea from "../../pages/Todo/ListArea";
import InfoArea from "../../pages/Todo/InfoArea";
import TodoImage from "../../pages/Todo/TodoImage";



const TodoContainer = (): any => {
  const { data, loading, deleteData, postData, putData } = useApi();
  const [taskList, setTaskList] = useState<ListItemType[]>([]);

  // show data of fetch
  useEffect(() => {
    !loading && setTaskList(data)
  }, [loading, data])


  // Helper
  const findIndexById = (array: ListItemType[], id: string) =>
    array.findIndex((item) => item.id === id);

  // Handlers
  const handleAddTask = (text: string) => {
    const newTask = {
      name: text,
      done: false,
      id: Math.random().toString(),
    };

    setTaskList((prevTasks) => [...prevTasks, newTask]);
    postData(newTask)
  };

  const handleChangeTask = (id: string, done: boolean) => {
    const newList = [...taskList];
    const index = findIndexById(newList, id);

    const newItem = {
      ...newList[index],
      done: done
    }

    newList[index] = newItem
    setTaskList(newList);
    putData(newItem)
  };

  const handleRemoveTask = (id: string) => {
    const newList = [...taskList];
    const index = findIndexById(newList, id);
    newList.splice(index, 1);
    setTaskList(newList);
    deleteData(id)
  };

  return (
    <>
      <Header />
      <InputArea onAddTask={handleAddTask} />
      <InfoArea taskList={taskList} />
      <ListArea
        onTaskRemove={handleRemoveTask}
        onTaskChange={handleChangeTask}
        taskList={taskList}
      />

      <TodoImage />
    </>
  );

};

export default TodoContainer;
