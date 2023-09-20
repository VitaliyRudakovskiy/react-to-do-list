import React from "react";
import classes from "../styles/TodoItem.module.css";

const TodoItem = ({ id, text, handleDeleteNote }) => {
  return (
    <form className={classes.itemForm}>
      <label>
        <input type='checkbox' />
        <p>{text}</p>
      </label>
      <button
        type='button'
        className={classes.deleteTodoButton}
        onClick={() => handleDeleteNote(id)}>
        Delete
      </button>
    </form>
  );
};

export default TodoItem;
