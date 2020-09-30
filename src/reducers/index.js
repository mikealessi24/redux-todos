import { todoReducer } from "./todoReducer";
import { visibilityReducer } from "./visibilityReducer";

export const rootReducer = (state = {}, action) => {
  return {
    todos: todoReducer(state.todos, action),
    visibilityFilter: visibilityReducer(state.visibilityFilter, action),
  };
};
