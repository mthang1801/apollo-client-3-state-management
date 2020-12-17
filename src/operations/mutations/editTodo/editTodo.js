export default (todosVar) => (id, text) =>
  todosVar(
    todosVar().map((todo) => (todo.id === id ? { ...todo, text } : todo))
  );
