import {
  loadTasksInProgress,
  loadTasksSuccess,
  loadTasksFailure,
  createTask,
  removeTask,
} from "./actions";

export const loadTasks = () => async (dispatch, getState) => {
  try {
    dispatch(loadTasksInProgress());
    const res = await fetch("http://localhost:8080/todos");
    const tasks = await res.json();
    dispatch(loadTasksSuccess(tasks));
  } catch (err) {
    dispatch(loadTasksFailure());
    dispatch(displayAlert(err));
  }
};

export const addTask = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text });
    const res = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: body,
    });
    const item = await res.json();
    dispatch(createTask(item));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const deleteTask = (id) => async (dispatch, getState) => {
  try {
    const res = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const item = await res.json();
    dispatch(removeTask(item));
  } catch (err) {
    dispatch(displayAlert(err));
  }
};

export const displayAlert = (err) => () => {
  alert(err);
};
