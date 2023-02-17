import { createContext } from 'react';

const initialState = {
//   contacts: [],
//   setContacts: () => {},
  newContactName: '',
//   setNewContactName: () => {},
  newContactNumber: '',
//   setNewContactNumber: () => {},
  filter: '',
  setFilter: () => {},
  handleRemoveContact: () => {},
  handleChange: () => {},
//   handleSubmit: () => {},
};
export const AppContext = createContext({
  initialState,
});
