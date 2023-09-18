import React from "react";
import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={classes.headerTop}>
        <h1>My Todo List</h1>
        <button className={classes.createTodoButton}>Toggle Mode</button>
      </div>
      <form className={classes.headerForm}>
        <input
          className={classes.createTodoInput}
          type='text'
          placeholder='Add todo...'
        />
        <button className={classes.createTodoButton}>Create</button>
      </form>
    </div>
  );
};

export default Header;
