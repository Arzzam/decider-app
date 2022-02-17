import React, { useRef, useState } from "react";

const Initial = () => {
  const textInput = useRef();
  const [showButton, setShowButton] = useState(false);
  const [showError, setShowError] = useState(false);

  const changeHandler = () => {
    if (textInput.current.value.length >= 5) setShowButton(true);
    else setShowButton(false);
  };

  const decideHandler = () => {
    const value = textInput.current.value;

    if (value.length >= 40) {
      setShowError(true);
    } else {
      setShowError(false);
    }
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
        <button onClick={decideHandler} className="btn">
          Decide
        </button>
      )}

      {showError && (
        <div className="error">This Question is too long!!!!!!</div>
      )}
    </div>
  );
};

export default Initial;
