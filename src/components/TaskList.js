import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
const newTask = tasks.map(task => {
  return <Task task={task} key={task.text} handleDelete={handleDelete}/>
})
  return (
    <div className="tasks">
      {newTask}
    </div>
  );
}

export default TaskList;
