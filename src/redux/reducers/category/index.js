import { CATEGORY_ACTION_TYPES } from './action-types';

export const initialState = [
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

    case CATEGORY_ACTION_TYPES.DELETE__CATEGORY:
      return [...state.initialState.filter((item) => item.id === action.payload)];

    case CATEGORY_ACTION_TYPES.ADD__TASK:
      return [
        ...state,
        {
          id: new Date().getDate(),
          task: action.payload,
          isCompleted: false,
        },
      ];

    case CATEGORY_ACTION_TYPES.DELETE__TASK:
      return [...state.initialState.filter((item) => item.id === action.payload)];
    default:
      return state;
  }
};
