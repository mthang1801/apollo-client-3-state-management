export default (todosVar) => () =>
  todosVar(todosVar().map((todo) => ({ ...todo, completed: false })));
