import React from "react";
import {
  TaskItem,
  ButtonsContainer,
  ActionButton,
} from "./styled-components/styledComponents";

const TaskListItem = ({ task, onRemovePressed, onCompletePressed }) => {
  const handleRemove = (e) => {
    onRemovePressed(task.id);
  };

  const handleComplete = (e) => {
    onCompletePressed(task.id);
  };

  return (
    <TaskItem>
      <h3>{task.text}</h3>
      <ButtonsContainer>
        {task.isCompleted ? null : (
          <ActionButton onClick={handleComplete}>
            Mark as completed
          </ActionButton>
        )}
        <ActionButton onClick={handleRemove}>Remove</ActionButton>
      </ButtonsContainer>
    </TaskItem>
  );
};

export default TaskListItem;
