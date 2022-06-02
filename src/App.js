import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, CategoryForm, List, Tasks, TaskList } from './components';
import { CATEGORY__ACTIONS } from './redux/reducers/category/actions';

function App() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  console.log('### categories', categories);

  const onSubmit = (categoryName) => dispatch(CATEGORY__ACTIONS.addCategory(categoryName));

  return (
    <div className="App">
      <div className="wrapper">
        <h1> Todo List</h1>
        <div className="catPanel">
          <CategoryForm onSubmit={onSubmit} />
          <Categories categories={categories} />
          <List />
          <Tasks onSubmit={onSubmit} />
          <TaskList categoryName={categories[0].categoryName} tasks={categories[0].tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
