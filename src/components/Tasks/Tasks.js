import React, { useState } from 'react';

export const Tasks = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleOnChange = ({ target }) => setTask(target.value);
  const handleOnSubmit = (event) => {
    event.preventDefault();

    onSubmit(task);
    setTask('');
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input className="in" type="text" value={task} onChange={handleOnChange} />
      <button className="btn" type="button" onClick={handleOnSubmit}>
        Добавить задачу
      </button>
    </form>
  );
};
