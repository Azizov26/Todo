import React, { useState } from 'react';

export const Tasks = ({ onSubmit, categoryId }) => {
  const [taskName, setTask] = useState('');

  const handleOnChange = ({ target }) => setTask(target.value);
  const handleOnSubmit = (event) => {
    event.preventDefault();

    onSubmit({ taskName, categoryId });
    setTask('');
  };
  return (
    <form className="Tasks" onSubmit={handleOnSubmit}>
      <input className="in" type="text" value={taskName} onChange={handleOnChange} />
      <button className="btn" type="button" onClick={handleOnSubmit}>
        Добавить задачу
      </button>
    </form>
  );
};
