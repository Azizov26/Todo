import React from 'react';
import { TaskItem } from '../TaskItem/TaskItem';
import styles from './TaskList.module.scss';

export const TaskList = (props) => {
  console.log('### props', props);

  return (
    <div className={styles.ul}>

      <div className={styles.categoryName}> Category: {props.categoryName}</div>
      {props.tasks.map(({ taskName, todoId }) => (
        <TaskItem categoryId={props.categoryId} taskName={taskName} key={todoId} todoId={todoId} />
      ))}
    </div>
  );
};
