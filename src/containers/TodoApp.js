import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoAdd from '../components/TodoAdd';
import Footer from '../components/Footer';

import store from '../store';




let nextTodoId = 0;
const TodoApp = ({ todos, filter }) => (
  <div>
    <TodoAdd onAddClick={(text) => {
      store.dispatch({
        type: 'TODO_ADD',
        text: text,
        id: nextTodoId ++
      });
    }} />
  <VisibleTodoList />
    <Footer filter={filter} onFilterClick={filter => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        });
      }} />
  </div>
);

export default TodoApp;
