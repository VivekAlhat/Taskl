import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getTasks,
  getLoading,
  getCompletedTasks,
  getIncompleteTasks,
} from "../store/selectors";
import { loadTasks, deleteTask, markCompleteTask } from "../store/thunks";
import TaskListItem from "./TaskListItem";
import AddTask from "./AddTask";
import "./css/tasklist.css";

const TaskList = ({
  completedTasks,
  incompleteTasks,
  onRemovePressed,
  onCompletePressed,
  isLoading,
  startLoadingTasks,
}) => {
  useEffect(() => {
    startLoadingTasks();
  }, []);

  const loadingMessage = (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      Loading data...
    </div>
  );
  const tasksData = (
    <div className="task-list-wrapper">
      <AddTask />
      <h3 style={{ margin: "1rem 0" }}>Incomplete Tasks:</h3>
      {incompleteTasks.map((task, key) => (
        <TaskListItem
          key={key}
          task={task}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
      <hr />
      <h3 style={{ margin: "1rem 0" }}>Complete Tasks:</h3>
      {completedTasks.map((task, key) => (
        <TaskListItem
          key={key}
          task={task}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : tasksData;
};

const mapStateToProps = (state) => ({
  completedTasks: getCompletedTasks(state),
  incompleteTasks: getIncompleteTasks(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(deleteTask(id)),
  onCompletePressed: (id) => dispatch(markCompleteTask(id)),
  startLoadingTasks: () => dispatch(loadTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
