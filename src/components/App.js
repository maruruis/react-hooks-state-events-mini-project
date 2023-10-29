import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task"; 

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All"); 

  const handleCategoryClick = (category) => {
    
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    
    setTasks([...tasks, newTask]);
  };

  
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);


  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onCategoryClick={handleCategoryClick} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList>
        
        {filteredTasks.map((task) => (
          <Task
            key={task.text}
            task={task}
            onDelete={deleteTask} 
          />
        ))}
      </TaskList>
    </div>
  );
}

export default App;