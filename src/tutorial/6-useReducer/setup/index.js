import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const ADD_ITEM = 'ADD_ITEM';
const NO_VALUE = 'NO_VALUE';

const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item added',
    };
  }

  if (action.type === NO_VALUE) {
    return { ...state, isModalOpen: true, modalContent: 'Pleasse enter a value' };
  }
  // throw new Error('No Action Is Matching');
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const newItem = {
        id: new Date().getTime().toString(),
        name,
      };
      dispatch({ type: ADD_ITEM, payload: newItem });
      setName('');
    } else {
      dispatch({ type: NO_VALUE });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <ul>
        {state.people.map((person) => {
          return (
            <li key={person.id}>
              <h4>{person.name}</h4>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Index;
