import React from 'react';

// import {useTypedSelector} from 'react-redux';
// import {CATEGORY} from '../../redux/reducers/category/action-types;'
import { CATEGORY__ACTIONS } from '../../redux/reducers/category/actions';
import { CategoryValue } from '../CategoryValue/CategoryValue';

import styles from './Categories.module.scss';

export const Categories = ({ categories }) => {
	// const todoData: CATEGORY[] = useTypedSelector(({todo}) => todo)
  

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
			
			<CategoryValue/>
			) 
			)
		}
    </div>
  );
};
// разобраться с версткой
// функцияонал удаления

// возможность переименования категорий
// возможность изменения текста задачи

// возможность выбираться категории
