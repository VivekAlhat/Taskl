import {
  loadTasksInProgress,
  loadTasksSuccess,
  loadTasksFailure,
} from "./actions";

export const loadTasks = () => async (dispatch, getState) => {
  try {
    dispatch(loadTasksInProgress());
    const res = await fetch("http://localhost:8080/todos-delay");
    const tasks = await res.json();
    dispatch(loadTasksSuccess(tasks));
  } catch (err) {
    dispatch(loadTasksFailure());
    dispatch(displayAlert(err));
  }
};

export const displayAlert = () => (err) => {
  alert(err);
};
