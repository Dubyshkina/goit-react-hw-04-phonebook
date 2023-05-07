
import s from '../Filter/Filter.module.css';

import PropTypes from 'prop-types';

export const Filter = ({ handelFilter }) => {
  return (
    <>
      <label htmlFor="filter">
        <input
          className={s.input}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handelFilter}
          required
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  handelFilter: PropTypes.func,
};
