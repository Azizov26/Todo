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
    <form className={styles.content} onSubmit={handleOnSubmit}>
      <input placeholder='Tasks...' className={styles.input} type="text" value={taskName} onChange={handleOnChange} />
      <button className={styles.button} type="button" onClick={handleOnSubmit}>
        ADD
      </button>
    </form>
  );
};
