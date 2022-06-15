import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './CategoryValue.module.scss';
import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';

export const CategoryValue = ({ categoryId, categoryName, isSelected }) => {
  const dispatch = useDispatch();
  const [isEdited, setIsEdited] = useState(false);
  const [inputValue, setInputValue] = useState(categoryName);

  const onChange = (e) => setInputValue(e.target.value);
  const onRename = () => {
    dispatch(CATEGORY__ACTIONS.renameCategory({ categoryId, categoryName: inputValue }));
    setIsEdited(false);
  };
  const onDelete = () => dispatch(CATEGORY__ACTIONS.deleteCategory({ categoryId }));

  const onFocus = () => {
	dispatch(CATEGORY__ACTIONS.focusCategory({ categoryId }));
	!isSelected




  return (
    <div onClick={onFocus} key={categoryName} className={styles.category}>
      {isEdited ? (
        <Fragment>
          <input value={inputValue} onChange={onChange} />
          <button onClick={onRename}> ✔ </button>
        </Fragment>
      ) : (
        <span className={styles.category__title}>
          {categoryName}
          <button onClick={() => setIsEdited(true)}>✍</button>
        </span>
      )}
      <button className={styles.button} type="button" onClick={onDelete}>
		✘
      </button>
    </div>
  );
};
}
