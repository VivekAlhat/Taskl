import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getLoading,
  getCompletedTasks,
  getIncompleteTasks,
} from "../store/selectors";
import { loadTasks, deleteTask, markCompleteTask } from "../store/thunks";
import {
  TaskListWrapper,
  TaskTitle,
  LoadingContainer,
} from "./styled-components/styledComponents";
import TaskListItem from "./TaskListItem";
import AddTask from "./AddTask";

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

  const loadingMessage = <LoadingContainer>Loading data...</LoadingContainer>;
  const tasksData = (
    <TaskListWrapper>
      <AddTask />
      <TaskTitle>Incomplete Tasks:</TaskTitle>
      {incompleteTasks.map((task, key) => (
        <TaskListItem
          key={key}
          task={task}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
      <hr />
      <TaskTitle>Complete Tasks:</TaskTitle>
      {completedTasks.map((task, key) => (
        <TaskListItem
          key={key}
          task={task}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </TaskListWrapper>
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
