import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTask, deleteTask, updateTask } from "./features/todoSlices";

function App() {
  const todos = useSelector((state) => state.todos);
  // const [isUpdateActive,setIsUpdateActive] = useState(false);
  // const [UpdateTask,setUpdateTask] = useState("");
   const todo = JSON.parse(localStorage.getItem("todo"));

  const dispatch = useDispatch();

  useEffect(() => {
    if (todo != null) {
      todo.map((t) => {
        console.log(t);
        dispatch(addTask(t));
      });
    }
  }, []);

  

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-1/2 m-5   rounded-xl">
        <div className="bg-purple-700  shadow-lg shadow-purple-500 flex-block justify-center items-center  rounded-xl">
          <div className="p-10 flex justify-center">
            <AddTask />
          </div>
        </div>

        <div className="bg-purple-400 shadow-lg shadow-purple-500 flex justify-center mt-2 rounded-lg">
          <div className="w-9/12 ">
            <ul className="flex flex-col  items-center ">
              {/* <div className="text-black py-3 border-2 border-purple-500 w-full bg-white shadow-lg rounded-lg flex flex-col items-center  my-1 " key={Date.now()}>       */}
              {todos.map((TodoItem) => (
                <TaskList key={TodoItem.id} id={TodoItem.id} TodoItem={TodoItem}/>
                
              ))}
              {/* </div> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
