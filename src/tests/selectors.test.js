import { expect } from "chai";
import {
  getCompletedTasks,
  getIncompleteTasks,
  getTasks,
  getLoading,
} from "../store/selectors";

describe("Testing GetCompletedTasks Selector", () => {
  it("Returns Only Completed Tasks", () => {
    const fakeTasks = [
      { text: "Test 1", isCompleted: true },
      { text: "Test 2", isCompleted: false },
      { text: "Test 3", isCompleted: true },
      { text: "Test 4", isCompleted: false },
      { text: "Test 5", isCompleted: true },
    ];

    const expected = [
      { text: "Test 1", isCompleted: true },
      { text: "Test 3", isCompleted: true },
      { text: "Test 5", isCompleted: true },
    ];

    const actual = getCompletedTasks.resultFunc(fakeTasks);
    expect(actual).to.deep.equal(expected);
  });
});

describe("Testing GetIncompleteTasks Selector", () => {
  it("Returns Only Incomplete Tasks", () => {
    const fakeTasks = [
      { text: "Test 1", isCompleted: true },
      { text: "Test 2", isCompleted: false },
      { text: "Test 3", isCompleted: true },
      { text: "Test 4", isCompleted: false },
      { text: "Test 5", isCompleted: true },
    ];

    const expected = [
      { text: "Test 2", isCompleted: false },
      { text: "Test 4", isCompleted: false },
    ];

    const actual = getIncompleteTasks.resultFunc(fakeTasks);
    expect(actual).to.deep.equal(expected);
  });
});

describe("Testing GetTasks Selector", () => {
  it("Return All Tasks", () => {
    const fakeState = {
      isLoading: false,
      tasks: [
        { text: "Test 1", isCompleted: true },
        { text: "Test 2", isCompleted: false },
        { text: "Test 3", isCompleted: true },
        { text: "Test 4", isCompleted: false },
        { text: "Test 5", isCompleted: true },
      ],
    };

    const expected = [
      { text: "Test 1", isCompleted: true },
      { text: "Test 2", isCompleted: false },
      { text: "Test 3", isCompleted: true },
      { text: "Test 4", isCompleted: false },
      { text: "Test 5", isCompleted: true },
    ];

    const actual = getTasks(fakeState);
    expect(actual).to.deep.equal(expected);
  });
});

describe("Testing GetLoading Selector", () => {
  it("Returns IsLoading State", () => {
    const fakeState = {
      isLoading: false,
      tasks: [{ text: "Test 1", isCompleted: true }],
    };

    const expected = false;
    const actual = getLoading(fakeState);
    expect(actual).to.deep.equal(expected);
  });
});
