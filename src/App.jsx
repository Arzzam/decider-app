import React from "react";

import "./assets/App.css";
import Confirm from "./Components/Confirm";
import Initial from "./Components/Initial";
import Result from "./Components/Result";

const App = () => {
  const componentHandler = () => {
    const screen = 0;
    if (screen === 0) return <Initial />;
    if (screen === 0) return <Confirm />;
    if (screen === 0) return <Result />;
  };

  return <div className="container">{componentHandler()}</div>;
};

export default App;
