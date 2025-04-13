import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <span>{text}</span>
      <span className="task-category">{category}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
