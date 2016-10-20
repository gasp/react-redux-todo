import { createStore, combineReducers } from 'redux';
import todos from './todos.js';
import filter from './filter.js';

const todoApp = combineReducers({ todos, filter });

const store = createStore(todoApp);

export default store;
