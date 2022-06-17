import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';
import styles from './TaskItem.module.scss';

export const TaskItem = ({ categoryId, taskName, todoId }) => {
	const dispatch = useDispatch();
	const [isEdited, setIsEdited] = useState(false);
	const [inputValue, setInputValue] = useState(taskName);

	const onChange = (e) => setInputValue(e.target.value);
	const onDelete = () => dispatch(CATEGORY__ACTIONS.deleteTask({ categoryId, todoId }))
	const onRename = () => {
		dispatch(CATEGORY__ACTIONS.renameTask({
			categoryId,
			todoId,
			taskName: inputValue
		}));

		setIsEdited(false);
	 };

  return (
    <div className="" >
      <div className={styles.task}>
	      {isEdited ? (
        <Fragment>
		  <input value={inputValue} onChange={onChange} />
		  <button onClick={onRename}> ✔ </button>
		</Fragment>
			) : (
				<span className={styles.task__title}>
					{taskName}
				<button onClick={() => setIsEdited(true)}>✍</button>
				</span>
			)}
        <button
          type="button"
          onClick={onDelete}>
          ✘
        </button>
      </div>
    </div>
  );
};
