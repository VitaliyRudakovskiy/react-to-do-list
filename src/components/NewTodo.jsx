import React, { useState } from "react";
import classes from "../styles/NewTodo.module.css";

const NewTodo = ({ handleAddNote }) => {
  const [taskText, setTaskText] = useState("");

  const handleChangeText = (e) => {
    setTaskText(e.target.value);
  };

  const handleSaveTask = () => {
    if (taskText.trim().length > 0) {
      handleAddNote(taskText);
    }
  };

  return (
    <form className={classes.headerForm}>
      <input
        className={classes.createTodoInput}
        type='text'
        placeholder='Add todo...'
        onChange={handleChangeText}
      />
      <button
        type='button'
        className={classes.createTodoButton}
        onClick={handleSaveTask}>
        Create
      </button>
    </form>
  );
};

export default NewTodo;
