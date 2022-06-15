import React from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';
import styles from './TaskItem.module.scss';

export const TaskItem = ({ categoryId, taskName, todoId }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className={styles.task}>
        <span className={styles.task__title}>{taskName}</span>
        <button
          className=""
          type="button"
          onClick={() => dispatch(CATEGORY__ACTIONS.deleteTask({ categoryId, todoId }))}>
          ✘
        </button>
      </div>
    </div>
  );
};
