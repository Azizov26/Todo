import React from 'react';

import { CategoryItem } from '../CategoryItem/CategoryItem';

import styles from './Categories.module.scss';

export const Categories = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <CategoryItem key={category.categoryId} {...category} />
      ))}
    </div>
  );
};
