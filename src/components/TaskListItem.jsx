import React from "react";
import "./css/task.css";

const TaskListItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.data}</h3>
      <div className="buttons-container">
        <button className="cmplt-btn">Mark as completed</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default TaskListItem;
