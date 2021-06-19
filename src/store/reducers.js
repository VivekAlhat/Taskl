import { CREATE_TASK, REMOVE_TASK } from "./actions";

export const tasksReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TASK: {
      const { task } = payload;
      const newTask = { task, isCompleted: false };
      return state.concat(newTask);
    }
    case REMOVE_TASK: {
      const { task } = payload;
      return state.filter((item) => item.task !== task);
    }
    default: {
      return state;
    }
  }
};
