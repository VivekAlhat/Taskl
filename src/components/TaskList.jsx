import React from "react";
import TaskListItem from "./TaskListItem";
import AddTask from "./AddTask";
import "./css/tasklist.css";

const TaskList = ({ tasks = [] }) => {
  return (
    <div className="task-list-wrapper">
      <AddTask />
      {tasks.map((task, key) => (
        <TaskListItem key={key} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
