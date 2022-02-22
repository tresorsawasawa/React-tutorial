import React, { useState } from "react";

const UseStateBasics = () => {

  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    (text === 'Random Title') ? setText('Hello world') : setText('Random Title');
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button
        type="button"
        className="btn"
        onClick={handleClick}
      >
        Change Title
        </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
