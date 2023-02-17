import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import css from './ContactFilter.module.css';
import { AppContext } from 'components/AppContext';

export const ContactFilter = () => {
  const { filter, handleChange } = useContext(AppContext);
  return (
    <>
      <p className={css.filter}>Find contacts by name</p>
      <input
        className={css.filter}
        onChange={handleChange}
        autoComplete="off"
        type="text"
        name="filter"
        value={filter}
        placeholder="search..."
      />
    </>
  );
};
ContactFilter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
