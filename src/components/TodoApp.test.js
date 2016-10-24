import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';

const mockStore = {
  dispatch() {},
  subscribe() {},
  getState() {
    return {
      todos: [],
      filter: ''
    }
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={mockStore}>
      <TodoApp />
    </Provider>, div);
});
