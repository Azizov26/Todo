import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, CategoryForm, Tasks, TaskList } from '../components';
import { CATEGORY__ACTIONS } from '../redux/reducers/category/actions';

import styles from './Application.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const onSubmitCategoryForm = (categoryName) => dispatch(CATEGORY__ACTIONS.addCategory(categoryName));
  const onSubmitTaskForm = ({ taskName, categoryId }) => dispatch(CATEGORY__ACTIONS.addTask({ taskName, categoryId }));

  const allTasks = categories.reduce((acc, category) => acc + category.tasks.length, 0);
  const completedTasks = categories.reduce(
    (acc, category) => acc + category.tasks.filter(({ isCompleted }) => isCompleted).length,
    0,
  );

  const countChecked = (100 / allTasks) * completedTasks;
  const selectedCategory = categories.filter(({ isSelected }) => isSelected === true)[0];

  return (
    <div className={styles.app}>
      <div>
        <h1 className={styles.title}> Todo List</h1>
        <div className={styles.progressBar}>
          <div style={{ width: countChecked + '%' }} className={styles.progressBar__content} />
        </div>

        <div className={styles.content}>
          <div className={styles.content__item}>
            <CategoryForm onSubmit={onSubmitCategoryForm} />
            <Categories categories={categories} />
          </div>
	
          <div className={styles.content__item_task}>
            {selectedCategory && (
              <Fragment>
                <Tasks categoryId={selectedCategory.categoryId} onSubmit={onSubmitTaskForm} />
                <TaskList
                  categoryName={selectedCategory.categoryName}
                  categoryId={selectedCategory.categoryId}
                  tasks={selectedCategory.tasks}
                />
              </Fragment>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
