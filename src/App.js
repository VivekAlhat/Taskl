import { hot } from "react-hot-loader/root";
import React from "react";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
};

export default hot(App);
