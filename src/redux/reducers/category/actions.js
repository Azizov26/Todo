import { CATEGORY_ACTION_TYPES } from './action-types';

export const CATEGORY__ACTIONS = Object.freeze({
  addCategory: (categoryName) => ({
    type: CATEGORY_ACTION_TYPES.ADD__CATEGORY,
    payload: categoryName,
  }),

  deleteCategory: (id) => ({
    type: CATEGORY_ACTION_TYPES.DELETE__CATEGORY,
    payload: id,
  }),

  addTask: ({ taskName, categoryId }) => ({
    type: CATEGORY_ACTION_TYPES.ADD__TASK,
    payload: {
      taskName,
      categoryId,
    },
  }),

  deleteTask: ({ categoryId, todoId }) => ({
    type: CATEGORY_ACTION_TYPES.DELETE__TASK,
    payload: { categoryId, todoId },
  }),
});
