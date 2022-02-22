import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// seco nd parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call Use Efect");
    if (value >= 1) {
      document.title = `React Tutorial(${value})`;
    }
  }, [value]);

  // useEffect(() => {
  //   console.log("Hello World");
  // });

  console.log("Render component");

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
