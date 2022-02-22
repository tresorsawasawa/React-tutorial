import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>Value: {secondValue}</h2> */}

      <h2>{text || 'Tresor Sawasawa'}</h2>
      {text && <h2>Hello From React</h2> }
      {!text && <h2>Hello From React</h2> }
    </>
  );
};

export default ShortCircuit;
