import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './storage/localStorage';
import todoApp from './reducers/index';

const presets =  { todos: [
  { id: 11, text: 'Learn React', completed: true },
  { id: 12, text: 'Learn Redux', completed: true },
  { id: 13, text: 'Learn Redux for real', completed: false },
  { id: 14, text: 'Learn React router', completed: false }
], filter:'' };

const configureStore = () => {
  const persistedState = loadState() || presets;

  const store = createStore(todoApp, persistedState);

  // store state only once each 10 secs
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  // FIXME: remove this hack
  window.store = store;

  return store;
}

export default configureStore;
