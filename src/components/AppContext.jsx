import { createContext } from 'react';

const initialState = {
  newContactName: '',
  newContactNumber: '',
  filter: '',
  handleRemoveContact: () => {},
  handleChange: () => {},
};
export const AppContext = createContext({
  initialState,
});
