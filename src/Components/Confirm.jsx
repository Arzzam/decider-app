import React, { useContext } from "react";
import { MyContext } from "../Context";

const Confirm = () => {
  const context = useContext(MyContext);

  const decideHandler = () => {
    context.goTo(2);
  };

  const goBackHandler = () => {
    context.goTo(0);
  };

  return (
    <div>
      <h3>Your Question is:</h3>
      <div className="viewer">{context.state.question}</div>
      <div>
        <hr />
        <button className="btn" onClick={decideHandler}>
          Decide
        </button>
        <button className="btn" onClick={goBackHandler}>
          Ask New Question
        </button>
      </div>
    </div>
  );
};

export default Confirm;
