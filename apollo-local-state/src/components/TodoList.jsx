import React from "react";
import TodoItem from "./TodoItem";
import { todosVar } from "../cache";
import { VisibilityFilter } from "../models/VisibilityFilter";
import { todoMutations } from "../operations/mutations";
const filterTodosByVisibility = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_COMPLETED.id:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilter.SHOW_ACTIVE.id:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};

const TodoList = ({ visibilityFilter }) => {
  const todos = todosVar();
  const filteredTodos = filterTodosByVisibility(todos, visibilityFilter);
  const { toggleCompleteTodo, editTodo, deleteTodo } = todoMutations;    
  return (
    <>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          actions={{ toggleCompleteTodo, editTodo, deleteTodo }}
        />
      ))}
    </>
  );
};

export default TodoList;
