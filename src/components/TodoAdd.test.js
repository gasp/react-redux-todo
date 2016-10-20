import React from 'react';
import ReactDOM from 'react-dom';
import TodoAdd from './TodoAdd';

it('renders without crashing', () => {
  const fakeprops = {onAddClick: () => {}};
  const div = document.createElement('div');
  ReactDOM.render(<TodoAdd {...fakeprops}/>, div);
});
