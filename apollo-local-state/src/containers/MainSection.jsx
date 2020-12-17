import React from "react";
import { todoMutations } from "../operations/mutations";
import { GET_ALL_TODOS, GET_VISIBILITY_FILTER } from "../operations/queries";
import { useQuery } from "@apollo/client";
import MainSection from "../components/MainSection";
export default () => {
  const getAllTodos = useQuery(GET_ALL_TODOS);
  const getVisibilityFilter = useQuery(GET_VISIBILITY_FILTER);
  const {
    completeAllTodos,
    clearCompletedAllTodos,
    setVisibilityFilter,
  } = todoMutations;
  const todos = getAllTodos.data.todos;
  const visibilityFilter = getVisibilityFilter.data.visibilityFilter;    
  return (
    <MainSection
      todos={todos}
      todosCount={todos.length}
      completedCount={todos.filter(todo=> todo.completed).length}
      visibilityFilter={visibilityFilter}
      actions={{
        completeAllTodos,
        clearCompletedAllTodos,
        setVisibilityFilter,
      }}
    />
  );
};
