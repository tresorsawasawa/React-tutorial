import React, { useState } from "react";

const UseStateCounter = () => {
  const styling = { margin: '4rem 0'}

  const [value, setValue] = useState(0);

  const handleDecrease = () => setValue(value - 1)
  const handleIncrease = () => setValue(value + 1)

  return (
    <>
      <section style={styling}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={handleDecrease}>decreament</button>
        <button type="button" className="btn" onClick={() => setValue(0)}>reset</button>
        <button type="button" className="btn" onClick={handleIncrease}>increament</button>
      </section>
    </>
  );
};

export default UseStateCounter;
