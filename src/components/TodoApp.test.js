import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

it('renders without crashing', () => {
  const fakestate = {todos:[], filter:''};
  const div = document.createElement('div');
  ReactDOM.render(<TodoApp {...fakestate}/>, div);
});


it('renders multiple todos', () => {
  const fakestate = {todos:[
    {id:0xfd, text:'sample one', completed: false},
    {id:0xfe, text:'sample two', completed: true},
    {id:0xff, text:'sample three', completed: false}
  ], filter:''};

  const div = document.createElement('div');
  ReactDOM.render(<TodoApp {...fakestate}/>, div);
  console.log(div);
  expect(
    div.querySelectorAll('li').length
  ).toEqual(3);
  expect(
    div.querySelectorAll('li')[1].innerHTML
  ).toEqual('sample two');
});
