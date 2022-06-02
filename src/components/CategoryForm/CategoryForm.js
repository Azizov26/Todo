import React, { useState } from 'react';

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
      <input className="inputCategory" type="text" value={categoryName} onChange={handleOnChange} />
      <button type="submit" onClick={handleOnSubmit}>
        ДОБАВИТЬ КАТЕГОРИЮ
      </button>
    </form>
  );
};
