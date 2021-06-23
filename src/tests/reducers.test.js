import { expect } from "chai";
import tasksReducer from "../store/reducers";

describe("TasksReducer Test", () => {
  it("Adds A New Task When CreateTask Action Is Received", () => {
    const dummyState = { isLoading: false, tasks: [] };
    const dummyTask = { id: 1, text: "Test Task", isCompleted: false };
    const dummyAction = {
      type: "CREATE_TASK",
      payload: {
        task: dummyTask,
      },
    };
    const expected = { isLoading: false, tasks: [dummyTask] };
    const actual = tasksReducer(dummyState, dummyAction);
    expect(actual).to.deep.equal(expected);
  });
});

describe("TasksReducer Test", () => {
  it("Removes A Task When RemoveTask Action Is Received", () => {
    const dummyTask = { id: 1, text: "Test Task", isCompleted: false };
    const dummyState = { isLoading: false, tasks: [dummyTask] };
    const dummyAction = {
      type: "REMOVE_TASK",
      payload: {
        task: dummyTask,
      },
    };
    const expected = { isLoading: false, tasks: [] };
    const actual = tasksReducer(dummyState, dummyAction);
    expect(actual).to.deep.equal(expected);
  });
});

// describe("TasksReducer Test", () => {
//   it("Marks A Task As Complete When MarkCompleted Action Is Received", () => {
//     const dummyTask = {
//       id: "ae06181d-92c2-4fed-a29d-fb53a6301eb9",
//       text: "Learn about React Ecosystems",
//       isCompleted: false,
//       createdAt: new Date(),
//     };
//     const dummyState = { isLoading: false, tasks: [dummyTask] };
//     const dummyAction = {
//       type: "MARK_COMPLETED",
//       payload: {
//         task: dummyTask,
//       },
//     };
//     const expected = {
//       isLoading: false,
//       tasks: [{ ...dummyTask, isCompleted: true }],
//     };
//     const actual = tasksReducer(dummyState, dummyAction);
//     expect(actual).to.deep.equal(expected);
//   });
// });
