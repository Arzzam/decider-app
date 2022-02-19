import React, { useContext } from "react";

import "./assets/App.css";
import Confirm from "./Components/Confirm";
import Initial from "./Components/Initial";
import Result from "./Components/Result";
import { MyContext } from "./Context";

const App = () => {
  const context = useContext(MyContext);

  const componentHandler = () => {
    const screen = context.state.screen;
    if (screen === 0) return <Initial />;
    if (screen === 1) return <Confirm />;
    if (screen === 2) return <Result />;
  };

  return <div className="container">{componentHandler()}</div>;
};

export default App;
