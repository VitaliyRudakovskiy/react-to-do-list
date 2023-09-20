import React from "react";
import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={classes.headerTop}>
        <h1>My Todo List</h1>
        <button type='button' className={classes.toggleModeButton}>
          Toggle Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
