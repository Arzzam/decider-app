import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context";

const Result = () => {
  return (
    <div>
      <h3>Your Anwer is:</h3>
      <div className="viewer">{context.state.question}</div>
    </div>
  );
};

export default Result;
