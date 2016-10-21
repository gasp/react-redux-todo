import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

it('renders a TodoList without crashing', () => {
  const todos = [];
  const div = document.createElement('div');
  ReactDOM.render(<TodoList todos={todos}/>, div);
});


it('renders a TodoList with multiple todos', () => {
  const todos = [
    {id:0xfd, text:'sample one', completed: false},
    {id:0xfe, text:'sample two', completed: true},
    {id:0xff, text:'sample three', completed: false}
  ];

  const div = document.createElement('div');
  ReactDOM.render(<TodoList todos={todos}/>, div);
  expect(
    div.querySelectorAll('li').length
  ).toEqual(3);
  expect(
    div.querySelectorAll('li')[1].innerHTML
  ).toEqual('sample two');
});
