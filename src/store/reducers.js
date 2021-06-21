import {
  CREATE_TASK,
  REMOVE_TASK,
  MARK_COMPLETED,
  LOAD_TASKS_IN_PROGRESS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_FAILURE,
} from "./actions";

const initialState = { isLoading: false, tasks: [] };

const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TASK: {
      const { task } = payload;
      return {
        ...state,
        tasks: [...state.tasks, task],
      };
    }
    case REMOVE_TASK: {
      const { task: taskToRemove } = payload;
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== taskToRemove.id),
      };
    }
    case MARK_COMPLETED: {
      const { task } = payload;
      const newTasks = state.tasks.map((item) => {
        if (item.id === task.id) {
          return {
            task,
          };
        }
        return item;
      });
      return {
        ...state,
        tasks: newTasks,
      };
    }
    case LOAD_TASKS_SUCCESS: {
      const { tasks } = payload;
      return {
        ...state,
        isLoading: false,
        tasks: tasks,
      };
    }
    case LOAD_TASKS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_TASKS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default tasksReducer;
