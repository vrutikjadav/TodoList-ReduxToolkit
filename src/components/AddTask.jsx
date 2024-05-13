import React from "react";
import { useState } from "react";
import { addTask } from "../features/todoSlices";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const AddTask = ({id}) => {
  const todos = useSelector((state) => state.todos);

  const [newTodo, SetNewTodo] = useState("");
  const dispatch = useDispatch();

  const hanldeadd = () => {
    
    dispatch(addTask({ id: uuidv4(), task: newTodo }));
    SetNewTodo("");
    console.log("edjjou");
  };
  
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="flex flex-col items-center justify-center w-full tracking-wide font-bold p-2">
      <div className="text-4xl text-white">
        <h1>Todo List</h1>
      </div>
      <div className="flex flex-col w-full items-center justify-start mt-4 lg:w-full lg:flex lg:flex-row lg:mt-10">
        <input
          type="text"
          onChange={(e) => SetNewTodo(e.target.value)}
          value={newTodo}
          className="rounded-lg p-2 w-3/4 shadow-xl"
        />
        <button
          type="sumbit"
          className="mt-0 lg:ml-5 bg-purple-400 text-white p-2 rounded-lg  w-1/5 shadow-xl"
          onClick={hanldeadd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
