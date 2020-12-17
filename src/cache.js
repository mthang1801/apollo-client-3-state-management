import { InMemoryCache } from "@apollo/client";
import { Todo, VisibilityFilter } from "./models";
import { makeVar } from "@apollo/client";

const todoInitial = [
  {
    id: 0,
    text: "Hello World",
    completed: false,
  },
];

export const todosVar = makeVar(todoInitial);

export const visibilityFilterVar = makeVar(VisibilityFilter.SHOW_ALL);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read: () => todosVar(),
        },
        visibilityFilter : {
          read : () => visibilityFilterVar()
        }
      },
    },
  },
});
