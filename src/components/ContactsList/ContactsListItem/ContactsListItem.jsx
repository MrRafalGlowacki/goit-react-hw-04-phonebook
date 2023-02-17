import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';
import { AppContext } from 'components/AppContext';

export const ContactsListItem = ({
  id,
  name,
  number,

  // onUnmount,
}) => {
  // useEffect(() => {
  //   console.log('coś');
  //   return () => {
  //     console.log(`Człowiek ${name} zostal usunięty`);
  //     // onUnmount(name);
  //   };
  // }, [name]);
  const { handleRemoveContact } = useContext(AppContext);
  return (
    <li key={id} className={css.item}>
      <span className={css.name}>
        {name}: {number}
      </span>{' '}
      <button
        type="button"
        className={css.button}
        onClick={() => handleRemoveContact(id)}
      >
        X
      </button>
    </li>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onContactRemove: PropTypes.func,
  onUnmount: PropTypes.func,
};
