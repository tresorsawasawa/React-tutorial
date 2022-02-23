import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, email);
    if (firstName.trim() && email.trim()) {
      // console.log('Form submited')
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      // people.push(person);
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        <ul>
          {people.map((person) => {
            const { id, email, firstName } = person;
            return <li key={id} className="item">
              <h4>{firstName}</h4>
              <span>{email}</span>
            </li>
          })}
        </ul>
      </article>
    </>
  );
};

export default ControlledInputs;
