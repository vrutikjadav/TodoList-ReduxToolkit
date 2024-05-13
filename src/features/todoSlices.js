import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
        const todo = action.payload; 

      state.todos.push(todo);
    },
    deleteTask: (state, action) => {
        state.todos = state.todos.filter((todo) => (todo.id !== action.payload));
    },
    updateTask:(state,action) => {
      const { id,updatedTodo } = action.payload;
      console.log("bhai ye aii action todo  ",updatedTodo);
      console.log("haa bhai yahi id ke sath update kar -->",id);
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index] = updatedTodo;
      }
    }
  },
});

export const {addTask, deleteTask, updateTask} = todoSlice.actions;

export default todoSlice.reducer;