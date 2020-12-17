import createAddTodo from "./addTodo/addTodo";
import createCompleteAllTodos from "./completeAllTodos/completeAllTodos";
import createCompleteTodo from "./completeTodo/completeTodo";
import createDeleteTodo from "./deleteTodo/deleteTodo";
import createEditTodo from "./editTodo/editTodo";
import createClearCompletedAllTodos from "./clearCompletedAllTodos/clearCompletedAllTodos";
import { todosVar } from "../../cache";
export const todoMutations = {
  addTodo: createAddTodo(todosVar),
  completeAllTodos: createCompleteAllTodos(todosVar),
  completeTodo: createCompleteTodo(todosVar),
  deleteTodo: createDeleteTodo(todosVar),
  editTodo: createEditTodo(todosVar),
  clearCompletedAllTodos: createClearCompletedAllTodos(todosVar),
};
