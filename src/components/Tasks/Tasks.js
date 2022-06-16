import React, { useState } from 'react';

import styles from './Task.module.scss'

export const Tasks = ({ onSubmit, categoryId }) => {
  const [taskName, setTask] = useState('');

  const handleOnChange = ({ target }) => setTask(target.value);
  const handleOnSubmit = (event) => {
    event.preventDefault();

	 if (!taskName) return 
    onSubmit({ taskName, categoryId });
    setTask('');
  };
  
  return (
    <form onSubmit={handleOnSubmit}>
      <input className={styles.input} type="text" value={taskName} onChange={handleOnChange} />
      <button className={styles.button} type="button" onClick={handleOnSubmit}>
        ДОБАВИТЬ ЗАДАЧУ
      </button>
    </form>
  );
};
