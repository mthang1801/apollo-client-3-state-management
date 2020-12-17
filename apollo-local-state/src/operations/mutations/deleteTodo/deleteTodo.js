export default (todosVar) => (id) =>
  todosVar(todosVar().filter((todo) => todo.id !== id));
