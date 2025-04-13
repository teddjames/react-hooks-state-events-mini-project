import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((taskObj, idx) => (
        <Task
          key={idx}
          text={taskObj.text}
          category={taskObj.category}
          onDelete={() => onDeleteTask(taskObj)}
        />
      ))}
    </div>
  );
}

export default TaskList;
