import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import css from './AddName.module.css';
import { AppContext } from 'components/AppContext';

export const AddName = () => {
  const { handleChange, newContactName } = useContext(AppContext);
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <>
      <label htmlFor="name" className={css.name}>
        Name
      </label>
      <input
        onChange={handleChange}
        autoComplete="off"
        placeholder="Enter Name"
        type="text"
        name="name"
        value={newContactName}
        ref={ref}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

AddName.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};
