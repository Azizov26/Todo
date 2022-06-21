import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';
import { DeleteItems } from '../../application/assets/images/DeleteItems';
import { Edit } from '../../application/assets/images/Edit';
import { Done } from '../../application/assets/images/Done';

import styles from './CategoryItem.module.scss';


export const CategoryItem = ({ categoryId, categoryName }) => {
  const dispatch = useDispatch();
  const [isEdited, setIsEdited] = useState(false);
  const [inputValue, setInputValue] = useState(categoryName);

  const onChange = (e) => setInputValue(e.target.value);
  const onRename = () => {
    dispatch(CATEGORY__ACTIONS.renameCategory({ categoryId, categoryName: inputValue }));
    setIsEdited(false);
  };
  const onDelete = () => dispatch(CATEGORY__ACTIONS.deleteCategory({ categoryId }));
  const onShow = () => dispatch(CATEGORY__ACTIONS.showCategory({ categoryId }));

  return (
    <div onClick={onShow} key={categoryName} className={styles.category}>
      {isEdited ? (
        <Fragment>
          <input value={inputValue} onChange={onChange} />
          <button className={styles.button} onClick={onRename}> <Done/> </button>
        </Fragment>
      ) : (
        <div className={styles.category__title} >
          {categoryName}
				<button className={styles.edited} onClick={() => setIsEdited(true)}>
				<Edit/>
				</button>
				</div>
      )}
      <button className={styles.button} type="button" onClick={onDelete}>
		<DeleteItems/>
      </button>
    </div>
  );
};

