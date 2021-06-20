import { CREATE_TASK, REMOVE_TASK } from "./actions";

const initialState = { tasks: [{ text: "hello", isCompleted: false }] };

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
    default: {
      return state;
    }
  }
};

export default tasksReducer;
