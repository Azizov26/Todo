import React from 'react';
import { TaskItem } from '../../TaskItem/TaskItem';

export const TaskList = (props) => {
  return (
    <ul className="TaskList">
      {props.categoryName}
      {props.tasks.map((taskName, index) => (
        <TaskItem taskName={taskName} key={taskName.id} index={index} />
      ))}
    </ul>
  );
};
