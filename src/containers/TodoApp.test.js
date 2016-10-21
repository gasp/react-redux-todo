import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

it('renders without crashing', () => {
  const fakestate = {todos:[], filter:''};
  const div = document.createElement('div');
  ReactDOM.render(<TodoApp {...fakestate}/>, div);
});
