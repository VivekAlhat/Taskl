import styled from "styled-components";

export const AddTaskContainer = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 3rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskInput = styled.input`
  border: 1px solid #000;
  outline: none;
  font-size: 1rem;
  width: 100%;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
`;

export const AddBtn = styled.button`
  border: none;
  outline: none;
  width: 10rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
  color: #fff;
  background: #000;
`;

export const TaskListWrapper = styled.div`
  margin-top: 5rem;
`;

export const TaskTitle = styled.h3`
  margin: "1rem 0";
`;

export const LoadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const TaskItem = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.button`
  border: none;
  outline: none;
  width: 10rem;
  margin-right: 1rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
  color: #fff;
`;

export const AppContainer = styled.div`
  margin: 0 15rem;
`;
