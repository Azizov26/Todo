import { CATEGORY_ACTION_TYPES } from './action-types';

export const initialState = [
  {
    categoryId: '1',
    categoryName: 'ОБУЧЕНИЕ',
    tasks: [
      {
        todoId: '100',
        taskName: 'Разобраться с задачей',
        isCompleted: false,
      },
      {
        todoId: '101',
        taskName: 'Устроиться на работу',
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
          categoryId: new Date().getDate(),
          categoryName: action.payload,
          tasks: [],
        },
      ];

    case CATEGORY_ACTION_TYPES.DELETE__CATEGORY:
      return [...state.filter((item) => item.categoryId === action.payload)];

    case CATEGORY_ACTION_TYPES.ADD__TASK:
      return [...state];

    case CATEGORY_ACTION_TYPES.DELETE__TASK:
      const updatedState = state.map((category) => {
        if (category.categoryId === action.payload.categoryId) {
          return {
            ...category,
            tasks: category.tasks.filter((todo) => todo.todoId !== action.payload.todoId),
          };
        }

        return category;
      });
      return updatedState;

    default:
      return state;
  }
};
