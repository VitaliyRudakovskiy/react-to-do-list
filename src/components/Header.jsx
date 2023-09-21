import React, { useState } from "react";
import classes from "../styles/Header.module.css";
import Button, { SelectButton } from "./UI/Button";
import TodoModal from "./TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={classes.header}>
      <h1>My Todo List</h1>
      <div className={classes.buttonsContainer}>
        <Button variant='primary' onClick={() => setModalOpen(true)}>
          Add task
        </Button>
        <SelectButton id='status' value={filterStatus} onChange={updateFilter}>
          <option value='all'>All</option>
          <option value='incomplete'>Incomplete</option>
          <option value='complete'>Complete</option>
        </SelectButton>
      </div>
      <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default Header;
