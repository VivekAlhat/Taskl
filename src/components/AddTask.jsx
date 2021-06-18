import React, { useState } from "react";
import "./css/addtask.css";

const AddTask = () => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="add-task">
      <input
        className="task-input"
        type="text"
        value={task}
        onChange={handleChange}
        autoComplete="off"
        placeholder="What's on your mind?"
      />
      <button className="add-btn">Create Task</button>
    </div>
  );
};

export default AddTask;
