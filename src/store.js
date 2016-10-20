import { createStore } from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

const todoApp = (state = {}, action) => ({
  todos: todos(state.todos, action),
  visibilityFilter: visibilityFilter(state.visibilityFilter, action)
});
const store = createStore(todoApp);

export default store;
