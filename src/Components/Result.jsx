import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context";

const Result = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.result();
  }, []);

  const goBackHandler = () => {
    context.goTo(0);
  };

  return (
    <div>
      <h3>Your Anwer is:</h3>
      <div className="viewer">{context.state.result}</div>
      <div className="animate__animated animate__fadeInUp animate__delay-0.5s">
        <hr />
        <button className="btn" onClick={context.result}>
          Decide Again
        </button>
        <button className="btn" onClick={goBackHandler}>
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Result;
