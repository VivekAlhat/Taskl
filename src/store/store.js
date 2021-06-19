import { createStore, combineReducers } from "redux";
import { tasksReducer } from "./reducers";

const reducers = { tasksReducer };

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);
