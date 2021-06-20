import { CREATE_TASK, REMOVE_TASK, MARK_COMPLETED } from "./actions";

const initialState = { tasks: [] };

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
    default: {
      return state;
    }
  }
};

export default tasksReducer;
