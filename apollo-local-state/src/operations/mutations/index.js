import createAddTodo from "./addTodo/addTodo";
import createCompleteAllTodos from "./completeAllTodos/completeAllTodos";
import createToggleCompleteTodo from "./toggleCompleteTodo/toggleCompleteTodo";
import createDeleteTodo from "./deleteTodo/deleteTodo";
import createEditTodo from "./editTodo/editTodo";
import createClearCompletedAllTodos from "./clearCompletedAllTodos/clearCompletedAllTodos";
import createSetVisibilityFilter from "./setVisibilityFilter/setVisibilityFilter"
import { todosVar, visibilityFilterVar } from "../../cache";
export const todoMutations = {
  addTodo: createAddTodo(todosVar),
  completeAllTodos: createCompleteAllTodos(todosVar),
  toggleCompleteTodo: createToggleCompleteTodo(todosVar),
  deleteTodo: createDeleteTodo(todosVar),
  editTodo: createEditTodo(todosVar),
  clearCompletedAllTodos: createClearCompletedAllTodos(todosVar),
  setVisibilityFilter : createSetVisibilityFilter(visibilityFilterVar)
};
