import { combineReducers } from 'redux';
import todos from '../reducers/todos';
import filter from '../reducers/filter';

const todoApp = combineReducers({ todos, filter });
const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }
  return todoApp(state, action)
}

export default rootReducer;
