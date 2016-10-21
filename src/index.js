import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './containers/TodoApp';

import './index.css';

import store from './store';

window.store = store;

const render = () => {
  console.log('render');
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();
