export default (todosVar) => {
  const createTodoId = (allTodos) =>
    allTodos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1;
  const createNewTodo = (allTodos, text) => [
    ...allTodos,
    { id: createTodoId(allTodos), text, completed: false },
  ];
  return text => {
    const allTodos = todosVar();
    todosVar(createNewTodo(allTodos, text))
  };
};
