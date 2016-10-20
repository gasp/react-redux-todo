import React from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import Footer from './Footer';

import store from '../store';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
}


let nextTodoId = 0;
class TodoApp extends React.Component {
  render() {
    const { todos, filter } = this.props;

    const visibleTodos = getVisibleTodos(todos, filter);
    return (
      <div>
        <TodoAdd onAddClick={(text) => {
          store.dispatch({
            type: 'TODO_ADD',
            text: text,
            id: nextTodoId ++
          });
        }} />
        <TodoList todos={visibleTodos}
          onTodoClick={(id) => { store.dispatch({ type: 'TODO_TOGGLE', id }) }} />
        <Footer filter={filter} onFilterClick={filter => {
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            })
          }} />
      </div>
    )
  }
}

export default TodoApp;
