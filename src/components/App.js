import React, { useState } from "react";
import { CATEGORIES, TASKS as INITIAL_TASKS } from "../data";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filter, setFilter] = useState("All");

  function handleDelete(deletedTask) {
    setTasks((prev) => prev.filter((t) => t !== deletedTask));
  }

  function handleAdd(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  function handleSelectCategory(cat) {
    setFilter(cat);
  }

  const tasksToDisplay =
    filter === "All" ? tasks : tasks.filter((t) => t.category === filter);

  return (
    <div className="app">
      <h1>My Tasks</h1>

      <CategoryFilter
        categories={CATEGORIES}
        onSelectCategory={handleSelectCategory}
      />

      <NewTaskForm
        // exclude "All" from the form's category dropdown
        categories={CATEGORIES.filter((c) => c !== "All")}
        onTaskFormSubmit={handleAdd}
      />

      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDelete} />
    </div>
  );
}

export default App;
