import React from "react";
import "./css/task.css";

const TaskListItem = ({ todo }) => {
  return (
    <div className="task-item">
      <h3>{todo.data}</h3>
      <div className="buttons-container">
        <button className="cmplt-btn">Mark as completed</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default TaskListItem;
