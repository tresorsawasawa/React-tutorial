import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 32,
    message: "Random message",
  });
  const changeMessage = () => {
    console.log(person.message);
    setPerson({ ...person, message: 'New message'});
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
