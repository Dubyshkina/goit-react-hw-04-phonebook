import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { nanoid } from 'nanoid';

export const Form = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = event => {
    event.preventDefault();
    addContact({ name, number, id: nanoid() });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleAddContact} className={s.form}>
        <label htmlFor="name" className={s.label}>
          Name
        </label>
        <input
          onChange={event => setName(event.target.value)}
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="number" className={s.label}>
          Number
        </label>
        <input
          onChange={event => setNumber(event.target.value)}
          className={s.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className={s.btn}>
          Add to contacts
        </button>
      </form>
    </>
  );
};
Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
