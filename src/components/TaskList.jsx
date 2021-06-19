import React from "react";
import TaskListItem from "./TaskListItem";
import AddTask from "./AddTask";
import "./css/tasklist.css";

const TaskList = ({
  tasks = [
    { data: "Create Webpack Boilerplate" },
    { data: "Learn About Polybar Modules" },
  ],
}) => {
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
