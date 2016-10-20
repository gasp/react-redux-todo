import React from 'react';
import FilterLink from './FilterLink';
import TodoList from './TodoList';

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
        <input ref={node => {
            this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'TODO_ADD',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = '';
        }}>add Todo</button>
        <TodoList todos={visibleTodos}
          onTodoClick={(clickedId) => { store.dispatch({ type: 'TODO_TOGGLE', id: clickedId }) }} />
        <p>
          Show: {' '}
          <FilterLink filter='SHOW_ALL' currentFilter={filter}>All</FilterLink> | {' '}
          <FilterLink filter='SHOW_ACTIVE' currentFilter={filter}>Active</FilterLink> | {' '}
          <FilterLink filter='SHOW_COMPLETED' currentFilter={filter}>Completed</FilterLink>
        </p>
      </div>
    )
  }
}

export default TodoApp;
