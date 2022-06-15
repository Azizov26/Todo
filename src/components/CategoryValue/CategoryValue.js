import { isEditable } from '@testing-library/user-event/dist/utils';
import React, { useDispatch, useState } from 'react';
import styles from './CategoryValue.module.scss';

export const CategoryValue = () => {
  const dispatch = useDispatch();
  const [categoryValues, setCategoryValues] = useState([
    { id: 1,/* нужен другой ключ */span: 'span', input: 'input', isEditable: false },
  ]);

  const handleOnChangeCategory = (id) => {
    setCategoryValues(
      categoryValues.map((word) => ({
        ...word,
        isEditable: id === word.id ? !isEditable : isEditable,
      })),
    );
  };

  return (
    // {todoData.length ? todoData.map((todo:CATEGORY)) => (
		// {categoryValues.map((id, span,input, isEditable) => )}
    <div key={category.categoryName} className={styles.category}>
      {isEditable ? (
        <span key={span} className={styles.category__title}>
          {category.categoryName}     
          <button
            onClick={({ handleOnChangeCategory }) =>
              dispatch(CATEGORY__ACTIONS.renameCategory({ categoryId, categoryName }))
            }>
            ✍
          </button>
        </span>
      ) : (
        <input key={input}>
			<button> ✔ </button>
		   </input>
      )}
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(CATEGORY__ACTIONS.deleteCategory({ categoryId: category.categoryId }))}>
        X
      </button>
    </div>
  );
};
