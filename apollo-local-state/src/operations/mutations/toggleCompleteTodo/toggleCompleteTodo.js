export default (todosVar) => (id) =>
  todosVar(
    todosVar().map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
