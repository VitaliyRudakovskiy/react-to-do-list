import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("react-todo-list");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem("react-todo-list", JSON.stringify([]));
  return [];
};

const initaialValue = {
  filterStatus: "all",
  todolist: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initaialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todolist.push(action.payload);
      const todoList = window.localStorage.getItem("react-todo-list");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem(
          "react-todo-list",
          JSON.stringify(todoListArr)
        );
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("react-todo-list");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((item, index) => {
          if (item.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem(
          "react-todo-list",
          JSON.stringify(todoListArr)
        );
        state.todolist = todoListArr;
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("react-todo-list");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((item, index) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.status = action.payload.status;
          }
        });
        window.localStorage.setItem(
          "react-todo-list",
          JSON.stringify(todoListArr)
        );
        state.todolist = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
