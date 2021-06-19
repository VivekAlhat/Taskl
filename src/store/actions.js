export const CREATE_TASK = "CREATE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const createTask = (task) => {
  type: CREATE_TASK;
  payload: {
    task;
  }
};

export const removeTask = (task) => {
  type: REMOVE_TASK;
  payload: {
    task;
  }
};