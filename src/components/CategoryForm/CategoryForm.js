import React, { useState } from 'react';

import styles from './CategoryForm.module.scss';

export const CategoryForm = ({ onSubmit }) => {
  console.log();
  const [categoryName, setCategoryName] = useState('');

  const handleOnChange = ({ target }) => setCategoryName(target.value);
  const handleOnSubmit = (event) => {
    event.preventDefault();

    console.log(categoryName);

    if (categoryName !== '') {
      onSubmit(categoryName);
      setCategoryName('');
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input className={styles.input} type="text" value={categoryName} onChange={handleOnChange} />
      <button className={styles.button} type="submit" onClick={handleOnSubmit}>
        ДОБАВИТЬ КАТЕГОРИЮ
      </button>
    </form>
  );
};
