import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, CategoryForm, Tasks, TaskList } from '../components';
import { CATEGORY__ACTIONS } from '../redux/reducers/category/actions';

import styles from './Application.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  console.log('### categories', categories);

  const onSubmitCategoryForm = (categoryName) => dispatch(CATEGORY__ACTIONS.addCategory(categoryName));
  const onSubmitTaskForm = ({ taskName, categoryId }) => dispatch(CATEGORY__ACTIONS.addTask({ taskName, categoryId }));

  return (
    <div className={styles.app}>
      <div>
        <h1 className={styles.title}> Todo List</h1>
        <div className={styles.content}>
          <div className={styles.content__item}>
            <CategoryForm onSubmit={onSubmitCategoryForm} />
            <Categories categories={categories} />
          </div>

          <div className={styles.content__item}>

            <Tasks categoryId={categories.isSelected} onSubmit={onSubmitTaskForm} />

            <TaskList
              categoryName={categories[0].categoryName}
              categoryId={categories[0].categoryId}
              tasks={categories[0].tasks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
