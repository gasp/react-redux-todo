import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoAdd from '../containers/TodoAdd';
import Footer from '../components/Footer';

const TodoApp = () => (
  <div>
    <TodoAdd />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
