import React, { useEffect } from "react";
import { connect } from "react-redux";
import { markCompleted } from "../store/actions";
import { loadTasks, deleteTask } from "../store/thunks";
import TaskListItem from "./TaskListItem";
import AddTask from "./AddTask";
import "./css/tasklist.css";

const TaskList = ({
  tasks,
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
  return isLoading ? loadingMessage : tasksData;
};

const mapStateToProps = (state) => ({
  tasks: state.tasksReducer.tasks,
  isLoading: state.loadingReducer,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(deleteTask(id)),
  onCompletePressed: (task) => dispatch(markCompleted(task)),
  startLoadingTasks: () => dispatch(loadTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
