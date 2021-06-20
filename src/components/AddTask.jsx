import React, { useState } from "react";
import { connect } from "react-redux";
import { createTask } from "../store/actions";
import "./css/addtask.css";

const AddTask = ({ tasks, onCreatePressed }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = (e) => {
    const isDuplicate = tasks.some((item) => item.text === task);
    if (!isDuplicate) {
      onCreatePressed(task);
      setTask("");
    }
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
      <button className="add-btn" onClick={handleClick}>
        Create Task
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (task) => dispatch(createTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
