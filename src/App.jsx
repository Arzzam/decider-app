import React, { useContext } from "react";

import { ToastContainer } from "react-toastify";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./assets/App.css";
import "animate.css";
import Confirm from "./Components/Confirm";
import Initial from "./Components/Initial";
import Result from "./Components/Result";
import { MyContext } from "./Context";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const context = useContext(MyContext);

  const componentHandler = () => {
    const screen = context.state.screen;
    if (screen === 0) return <Initial />;
    if (screen === 1) return <Confirm />;
    if (screen === 2) return <Result />;
  };

  return (
    <div>
      <div className="container">
        <SwitchTransition mode="out-in">
          <CSSTransition key={context.state.screen} timeout={500}>
            {componentHandler()}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
