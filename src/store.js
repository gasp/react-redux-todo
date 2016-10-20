import { createStore, combineReducers } from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

export default store;
