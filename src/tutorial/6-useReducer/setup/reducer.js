// Actions
const ADD_ITEM = 'ADD_ITEM';
const NO_VALUE = 'NO_VALUE';
const CLOSE_MODAL = 'CLOSE_MODAL';
const REMOVE_ITEM = 'REMOVE_ITEM';

// reducer function
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
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Pleasse enter a value',
    };
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false, modalContent: 'item removed' };
  }

  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return { ...state, people: newPeople };
  }
  throw new Error('No Action Is Matching');
};

export { reducer };
