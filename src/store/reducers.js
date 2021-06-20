import {
  CREATE_TASK,
  REMOVE_TASK,
  MARK_COMPLETED,
  LOAD_TASKS_IN_PROGRESS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_FAILURE,
} from "./actions";

const initialState = { tasks: [] };

export const loadingReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_TASKS_IN_PROGRESS: {
      return true;
    }
    case LOAD_TASKS_SUCCESS:
    case LOAD_TASKS_FAILURE:
      return false;

    default: {
      return state;
    }
  }
};

const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TASK: {
      const { task } = payload;
      const newTask = { text: task, isCompleted: false };
      return {
        tasks: [...state.tasks, newTask],
      };
    }
    case REMOVE_TASK: {
      const { task } = payload;
      return {
        tasks: state.tasks.filter((item) => item.text !== task),
      };
    }
    case MARK_COMPLETED: {
      const { task } = payload;
      const newTasks = state.tasks.map((item) => {
        if (item.text === task) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      });
      return {
        tasks: newTasks,
      };
    }
    case LOAD_TASKS_SUCCESS: {
      const { tasks } = payload;
      return {
        tasks: tasks,
      };
    }
    case LOAD_TASKS_IN_PROGRESS:
    case LOAD_TASKS_FAILURE:
    default: {
      return state;
    }
  }
};

export default tasksReducer;
