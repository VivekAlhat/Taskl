import React from "react";
import { connect } from "react-redux";
import { removeTask, markCompleted } from "../store/actions";
import TaskListItem from "./TaskListItem";
import AddTask from "./AddTask";
import "./css/tasklist.css";

const TaskList = ({ tasks, onRemovePressed, onCompletePressed }) => {
  return (
    <div className="task-list-wrapper">
      <AddTask />
      {tasks.map((task, key) => (
        <TaskListItem
          key={key}
          task={task}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (task) => dispatch(removeTask(task)),
  onCompletePressed: (task) => dispatch(markCompleted(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
