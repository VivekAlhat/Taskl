import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
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

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
