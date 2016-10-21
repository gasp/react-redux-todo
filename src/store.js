import { createStore, combineReducers } from 'redux';
import todos from './reducers/todos.js';
import filter from './reducers/filter.js';

const todoApp = combineReducers({ todos, filter });
const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }
  return todoApp(state, action)
}

const presets =  { todos: [
  { id: 11, text: 'Learn React', completed: true },
  { id: 12, text: 'Learn Redux', completed: true },
  { id: 13, text: 'Learn Redux for real', completed: false },
  { id: 14, text: 'Learn React router', completed: false }
], filter:'' };
const store = createStore(rootReducer, presets);

export default store;
