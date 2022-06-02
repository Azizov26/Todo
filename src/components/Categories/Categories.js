import React from 'react';
import styles from './Categories.module.scss';

export const Categories = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div key={category.categoryName} className={styles.category}>
          {category.categoryName}
        </div>
      ))}
    </div>
  );
};
// записать проптайпы
// поправить верстку
// исправить задачи
