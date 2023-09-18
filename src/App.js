import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='container'>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
