import React from "react";
import classes from "../styles/TodoItem.module.css";

const TodoItem = () => {
  return (
    <form className={classes.itemForm}>
      <label>
        <input type='checkbox' />
        <p>Description</p>
      </label>
      <button className={classes.deleteTodoButton}>Delete</button>
    </form>
  );
};

export default TodoItem;
