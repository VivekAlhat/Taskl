export const CREATE_TASK = "CREATE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const LOAD_TASKS_IN_PROGRESS = "LOAD_TASKS_IN_PROGRESS";
export const LOAD_TASKS_SUCCESS = "LOAD_TASKS_SUCCESS";
export const LOAD_TASKS_FAILURE = "LOAD_TASKS_FAILURE";

export const createTask = (task) => ({
  type: CREATE_TASK,
  payload: {
    task,
  },
});

export const removeTask = (task) => ({
  type: REMOVE_TASK,
  payload: {
    task,
  },
});

export const markCompleted = (task) => ({
  type: MARK_COMPLETED,
  payload: {
    task,
  },
});

export const loadTasksInProgress = () => ({
  type: LOAD_TASKS_IN_PROGRESS,
});

export const loadTasksSuccess = (tasks) => ({
  type: LOAD_TASKS_SUCCESS,
  payload: {
    tasks,
  },
});

export const loadTasksFailure = () => ({
  type: LOAD_TASKS_FAILURE,
});
