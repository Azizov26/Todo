import React from 'react';

export const Categories = ({ categories }) => {
  return (
    <div className='categoriesList'>
      {categories.map((category) => (
        <span key={category.categoryName}className='categories'>{category.categoryName}</span>
      ))}
    </div>
  );
};
// записать проптайпы
// поправить верстку
// исправить задачи
