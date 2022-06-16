import React from 'react';
import { CategoryValue } from '../CategoryValue/CategoryValue';

import styles from './Categories.module.scss';

export const Categories = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <CategoryValue key={category.categoryId} {...category} />
      ))}
    </div>
  );
};
