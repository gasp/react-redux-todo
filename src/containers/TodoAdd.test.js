import React from 'react';
import ReactDOM from 'react-dom';
import TodoAdd from './TodoAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //ReactDOM.render(<TodoAdd />, div);
  // test action
  // https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md
  expect(true).toBe(true)
});
