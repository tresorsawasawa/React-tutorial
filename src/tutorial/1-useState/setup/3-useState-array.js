import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        const removeItem = (id) => {
          console.log(id);
          let newPeople = people.filter((person) => person.id !== id);
          setPeople(newPeople);
        };

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Delete
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
