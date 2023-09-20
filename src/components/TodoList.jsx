import React from "react";
import TodoItem from "./TodoItem";
import classes from "../styles/TodoList.module.css";

const TodoList = ({ tasks, handleDeleteNote }) => {
  const tasksList = tasks.map((item) => (
    <TodoItem
      id={item.id}
      text={item.text}
      key={item.id}
      handleDeleteNote={handleDeleteNote}
    />
  ));

  return <div className={classes.tasksContainer}>{tasksList}</div>;
};

export default TodoList;
