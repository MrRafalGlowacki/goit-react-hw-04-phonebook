import { createContext } from 'react';

const initialState = {
  newContactName: '',
  newContactNumber: '',
  filter: '',
  setFilter: () => {},
  handleRemoveContact: () => {},
  handleChange: () => {},
};
export const AppContext = createContext({
  initialState,
});
