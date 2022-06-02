import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, CategoryForm, List, Tasks, TaskList } from '../components';
import { CATEGORY__ACTIONS } from '../redux/reducers/category/actions';

import styles from './Application.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  console.log('### categories', categories);

  const onSubmit = (categoryName) => dispatch(CATEGORY__ACTIONS.addCategory(categoryName));

  return (
    <div className={styles.app}>
      <div>
        <h1 className={styles.title}> Todo List</h1>
        <div className={styles.content}>
          <div className={styles.content__item}>
            <CategoryForm onSubmit={onSubmit} />
            <Categories categories={categories} />
          </div>

          <div className={styles.content__item}>
            <List />
            <Tasks onSubmit={onSubmit} />
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
