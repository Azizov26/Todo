import React from 'react';
import { TaskItem } from '../../TaskItem/TaskItem';

export const TaskList = (props) => {
  console.log('### props', props);

  return (
    <ul className="TaskList">
      {props.categoryName}
      {props.tasks.map(({ taskName, todoId }) => (
        <TaskItem categoryId={props.categoryId} taskName={taskName} key={todoId} todoId={todoId} />
      ))}
    </ul>
  );
};
