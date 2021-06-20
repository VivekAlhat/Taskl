import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";

// Prints initial state
console.log(store.getState());

// Prints state whenever an action takes place
const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
