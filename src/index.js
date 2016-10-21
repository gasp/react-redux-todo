import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import store from './store'

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
