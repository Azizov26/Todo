import { CATEGORY_ACTION_TYPES } from './action-types';

const initialState = [
  {
    id: '1',
    categoryName: 'Сделать тестовое',
    tasks: [
      {
        id: '100',
        taskName: 'Разобраться с задачей',
        isCompleted: false,
      },
    ],
  },
];

// const createCategory = (categoryName) => ({
//   id: new Date().getDate(),
//   categoryName,
//   tasks: [],
// });

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_ACTION_TYPES.ADD__CATEGORY:
      return [
        ...state,
        {
          id: new Date().getDate(),
          categoryName: action.payload,
          tasks: [],
        },
      ];

    // //v2
    // case CATEGORY_ACTION_TYPES.ADD__CATEGORY:
    //   return [...state, createCategory(action.payload)];
    default:
      return state;
  }
};
