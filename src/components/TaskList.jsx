import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../features/todoSlices";

const TaskList = ({id,TodoItem}) => {
  const todos = useSelector((state) => state.todos);
  const [isUpdateActive,setIsUpdateActive] = useState(false);
  const [UpdateTask,setUpdateTask] = useState("");
  const todo = JSON.parse(localStorage.getItem("todo"));

  const dispatch = useDispatch();


  const handleUpdate = (id) =>
    {
      console.log(id);
      dispatch(updateTask({id : id,updatedTodo :{ id : id , task : UpdateTask }}));
      setUpdateTask("");
      setIsUpdateActive(false);
    }

  return (

      <li
        key={TodoItem.id}
        className="text-black py-3 border-2 border-purple-500 w-full bg-purple-100 shadow-lg rounded-lg flex justify-between items-center  my-1 h-16"
      >
        <div>
          {isUpdateActive ? (
            <input
              type="text"
              value={UpdateTask}
              onChange={(e) => setUpdateTask(e.target.value)}
              className="bg-white ml-2 outline-none border border-purple-700 p-1 w-full h-10 rounded-md"
            />
          ) : (
            <div className="ml-2 p-2">{TodoItem.task} </div>
          )}
        </div>
        <div>
          {isUpdateActive ? (
            <button
              className="mr-2 bg-purple-500 p-2 rounded-lg text-white"
              onClick={() => {
                handleUpdate(TodoItem.id);
              }}
            >
              Save
            </button>
          ) : (
            <button
              className="mr-2 bg-purple-500 p-2 rounded-lg text-white"
              onClick={() => {
                setIsUpdateActive(!isUpdateActive);
              }}
            >
              Update
            </button>
          )}

          <button
            className="mr-2 bg-purple-500 p-2 rounded-lg text-white"
            onClick={() => {
              dispatch(deleteTask(TodoItem.id));
            }}
          >
            Delete
          </button>
        </div>
      </li>
   
  );
};

export default TaskList;
