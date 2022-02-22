import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  const errorStyling = {
    color: "red",
    paddingTop: "1.5rem",
  };

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>Value: {secondValue}</h2> */}

      <h2>{text || "Tresor Sawasawa"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError ? (
        <h2 style={errorStyling}>Error...</h2>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
