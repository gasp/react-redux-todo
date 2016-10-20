import { createStore } from 'redux';
import todos from './todos.js';

const store = createStore(todos);

export default store;
