import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from './ContactsList/ContactsList';
import { AppContext } from './AppContext';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactNumber, setNewContactNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (!savedContacts) {
      return;
    } else
      try {
        setContacts(savedContacts);
      } catch (error) {
        console.log(error);
      }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleRemoveContact = id => {
    const remainingContacts = contacts.filter(contact => contact.id !== id);
    setContacts(remainingContacts);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setNewContactName(value);
        break;
      case 'number':
        setNewContactNumber(value);
        break;
      case 'filter':
        setFilter(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const found = contacts.find(contact => contact.name === newContactName);
    if (found) {
      alert(`${newContactName} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: newContactName,
        number: newContactNumber,
      };
      const newContacts = [contact, ...contacts];
      setContacts(newContacts);
      setNewContactName('');
      setNewContactNumber('');
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleChange,
        newContactName,
        newContactNumber,
        filter,
        handleRemoveContact,
      }}
    >
      <AddForm onSubmit={handleSubmit} />
      <ContactList
        contactList={contacts}

        // onUnmount={handleContactWillUnmount}
      />
    </AppContext.Provider>
  );
};
