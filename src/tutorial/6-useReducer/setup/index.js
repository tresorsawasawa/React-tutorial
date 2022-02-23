import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

// Actions
const ADD_ITEM = 'ADD_ITEM';
const NO_VALUE = 'NO_VALUE';
const CLOSE_MODAL = 'CLOSE_MODAL';
const REMOVE_ITEM = 'REMOVE_ITEM';

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

  const closeModal = () => dispatch({ type: CLOSE_MODAL });

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
            <li key={person.id} className="item">
              <h4>{person.name}</h4>
              <button
                onClick={() =>
                  dispatch({ type: REMOVE_ITEM, payload: person.id })
                }
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Index;
