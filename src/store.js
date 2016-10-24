import { createStore, combineReducers } from 'redux';
import throttle from 'lodash/throttle';
import todos from './reducers/todos';
import filter from './reducers/filter';
import { loadState, saveState } from './storage/localStorage';

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

const persistedState = loadState() || presets;

const store = createStore(rootReducer, persistedState);

// store state only once each 10 secs
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

// FIXME: remove this hack
window.store = store;

export default store;
