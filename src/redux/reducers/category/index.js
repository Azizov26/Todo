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
          categoryId: new Date().getTime(),
          categoryName: action.payload,
          tasks: [],
        },
      ];

    case CATEGORY_ACTION_TYPES.DELETE__CATEGORY:
      return [...state.filter((item) => item.categoryId !== action.payload)];

    case CATEGORY_ACTION_TYPES.ADD__TASK: {
      return state.map((category) => {
        if (category.categoryId === action.payload.categoryId) {
          return {
            ...category,
            tasks: [
              ...category.tasks,
              {
                todoId: new Date().getTime(),
                taskName: action.payload.taskName,
                isCompleted: false,
              },
            ],
          };
        }

        return category;
      });
    }

    case CATEGORY_ACTION_TYPES.DELETE__TASK:
      return state.map((category) => {
        if (category.categoryId === action.payload.categoryId) {
          return {
            ...category,
            tasks: category.tasks.filter((todo) => todo.todoId !== action.payload.todoId),
          };
        }

        return category;
      });

    default:
      return state;
  }
};
