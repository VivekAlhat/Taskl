import { expect } from "chai";
import { loadTasks } from "../store/thunks";
import "node-fetch";
import fetchMock from "fetch-mock";
import sinon from "sinon";

describe("Load Tasks Test", () => {
  it("Dispatches The Correct Action On Success", async () => {
    const fakeDispatch = sinon.spy();
    const fakeTasks = [{ text: "Test 1" }, { text: "Test 2" }];
    fetchMock.get("http://localhost:8080/todos", fakeTasks);
    const expectedFirstAction = { type: "LOAD_TASKS_IN_PROGRESS" };
    const expectedSecondAction = {
      type: "LOAD_TASKS_SUCCESS",
      payload: { tasks: fakeTasks },
    };
    await loadTasks()(fakeDispatch);
    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);
    fetchMock.reset();
  });
});
