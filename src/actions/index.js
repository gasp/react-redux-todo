
let nextTodoId = 0;
export const todoAdd = (text) => ({
  type: 'TODO_ADD',
  text,
  id: nextTodoId ++
});

export const filterSet = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const todoToggle = (id) => ({
  type: 'TODO_TOGGLE',
  id
});
