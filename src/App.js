import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";
import NewTodo from "./components/NewTodo";
import TotalCompleteItems from "./components/TotalComletedItems";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      text: "This is first task",
      key: nanoid(),
    },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: nanoid(),
      text: text,
      key: nanoid(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  };

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(
      localStorage.getItem("react-to-do-list")
    );

    if (tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-to-do-list", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='container'>
      <Header />
      <NewTodo handleAddNote={addTask} />
      <TodoList tasks={tasks} handleDeleteNote={deleteTask} />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
