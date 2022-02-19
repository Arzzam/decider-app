import React, { useRef, useState, useContext } from "react";
import { MyContext } from "../Context";

const Initial = () => {
  const context = useContext(MyContext);
  const textInput = useRef();
  const [showButton, setShowButton] = useState(false);
  const [showError, setShowError] = useState(false);

  const changeHandler = () => {
    if (textInput.current.value.length >= 5) setShowButton(true);
    else setShowButton(false);
  };

  const nextHandler = () => {
    const value = textInput.current.value;

    if (value.length >= 40) {
      setShowError(true);
    } else {
      setShowError(false);
    }
    context.goTo(1);
    context.question(value);
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <input
        ref={textInput}
        onChange={changeHandler}
        name="question"
        type="text"
        className="form-control"
      />
      {showButton && (
        <button
          onClick={nextHandler}
          className="btn animate__animated animate__fadeIn"
        >
          Next
        </button>
      )}

      {showError && (
        <div className="error">This Question is too long!!!!!!</div>
      )}
    </div>
  );
};

export default Initial;
