import { createSelector } from "reselect";

export const getTasks = (state) => state.tasks;
export const getLoading = (state) => state.isLoading;

export const getIncompleteTasks = createSelector(getTasks, (tasks) =>
  tasks.filter((item) => !item.isCompleted)
);

export const getCompletedTasks = createSelector(getTasks, (tasks) =>
  tasks.filter((item) => item.isCompleted)
);
