export default (todosVar) => (id) =>
  todosVar(
    todosVar().map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    )
  );
