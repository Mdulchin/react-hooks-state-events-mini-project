import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  
const [tasks, setTasks] = useState(TASKS)
const [selectedCategory, setSelectedCategory] = useState("All")

function HandleAddTask(newTask){
setTasks([...tasks, newTask])

}

const filterTasks = tasks.filter(task => {
  if (selectedCategory === "All") {
    return true
  }
 return (task.category === selectedCategory)
})

function handleDelete(taskToDelete){
const newTasks = tasks.filter((task) => {
  return task.text !== taskToDelete
})
setTasks(newTasks)
}
//   if (task.text !== taskToDelete){
//     return true
//   }
//   else {
//     return false}
// })
// }

  // const [categoryState, setCategoryState] = useState('All')



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      setSelectedCategory={setSelectedCategory} 
      selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES.filter((cat => cat !== "All"))} onTaskFormSubmit={HandleAddTask}/>
      <TaskList tasks={filterTasks} handleDelete={handleDelete}/>
    
    </div>
  );
}

export default App;
