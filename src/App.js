import { hot } from "react-hot-loader/root";
import React from "react";
import TaskList from "./components/TaskList";
import { AppContainer } from "./components/styled-components/styledComponents";

const App = () => {
  return (
    <AppContainer>
      <TaskList />
    </AppContainer>
  );
};

export default hot(App);
