import { useState, useEffect } from 'react';
import s from 'components/App.module.css';

import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactList = JSON.parse(localStorage.getItem('contacts'));
    contactList ? setContacts(contactList) : setContacts([]);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    contacts.some(
      cont => cont.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${contact.name} is already in contacts`)
      : setContacts(prev => [contact, ...prev]);
  };
  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteBtn = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2>Phonebook</h2>
        <Form addContact={addContact} />
      </div>
      <div className={s.section}>
        <h2>Contacts</h2>
        <Filter handelFilter={handleFilter} />
        <ContactsList
          contacts={filteredContacts()}
          handleDeleteBtn={handleDeleteBtn}
        ></ContactsList>
      </div>
    </div>
  );
};
