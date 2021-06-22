import React from "react";
import {
  TaskItem,
  TaskItemWarning,
  ButtonsContainer,
  ActionButton,
  CompleteButton,
  RemoveButton,
  DateText,
} from "./styled-components/styledComponents";

const TaskListItem = ({ task, onRemovePressed, onCompletePressed }) => {
  const handleRemove = (e) => {
    onRemovePressed(task.id);
  };

  const handleComplete = (e) => {
    onCompletePressed(task.id);
  };

  const Container = task.isCompleted ? TaskItem : TaskItemWarning;
  const Button = task.isCompleted ? RemoveButton : CompleteButton;

  return (
    <Container createdAt={task.createdAt}>
      <h3>{task.text}</h3>
      <DateText>
        Created at: &nbsp;
        {new Date(task.createdAt).toLocaleDateString()}
      </DateText>
      <ButtonsContainer>
        {task.isCompleted ? null : (
          <Button onClick={handleComplete}>Mark as completed</Button>
        )}
        <Button onClick={handleRemove}>Remove</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default TaskListItem;
