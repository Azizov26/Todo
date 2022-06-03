import React from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';
import { initialState } from '../../redux/reducers/category';

export const List = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li className="liCats">
          {initialState.categoryName}
          <button className="" type="button" onClick={() => dispatch(CATEGORY__ACTIONS.deleteCategory('1'))}>
            Удалить
          </button>
        </li>
      </ul>
    </div>
  );
};
