import React from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';

export const TaskList = () => {
  const dispatch = useDispatch();

  return (
    <ul>
      {/* {task.map((item) => ( */}
      <li
      /* // key={item.id}
			//  style={{
			//  color: item.isImportant ? 'red' : '',
			//   background: item.isDone ? 'cadetblue' : '', */
      >
        {/* {item.title} */}
        <div className="">
          <button className="" type="button" onClick={() => dispatch(CATEGORY__ACTIONS.deleteTask('100'))}>
            {' '}
            ✘{' '}
          </button>
          {/* <button className="" type="button" onClick={() => dispatch(doImportant(item.id))}>
				 {' '}
				  ✮{' '}
				</button> */}
          {/* <button className="" type="button" onClick={() => dispatch(doDone(item.id))}>
				 {' '}
		  ✔{' '}
			 </button> */}
        </div>
      </li>
    </ul>
  );
};
