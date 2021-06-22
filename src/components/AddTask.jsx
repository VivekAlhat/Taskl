import React, { useState } from "react";
import { connect } from "react-redux";
import { getTasks } from "../store/selectors";
import { addTask } from "../store/thunks";
import {
  AddTaskContainer,
  TaskInput,
  AddBtn,
} from "./styled-components/styledComponents";

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
    <AddTaskContainer>
      <TaskInput
        type="text"
        value={task}
        onChange={handleChange}
        autoComplete="off"
        placeholder="What's on your mind?"
      />
      <AddBtn onClick={handleClick}>Create Task</AddBtn>
    </AddTaskContainer>
  );
};

const mapStateToProps = (state) => ({
  tasks: getTasks(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (task) => dispatch(addTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
