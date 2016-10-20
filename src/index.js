import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import FilterLink from './FilterLink';
import './index.css';

import store from './store';

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
    const visibleTodos = getVisibleTodos(this.props.todos, this.props.filter);
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
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id} onClick={() => {
                store.dispatch({
                  type: 'TODO_TOGGLE',
                  id: todo.id
                })
              }}
              style={{
                textDecoration: todo.completed ? 'line-through': 'none'
              }}>
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show: {' '}
          <FilterLink filter='SHOW_ALL'>All</FilterLink> | {' '}
          <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink> | {' '}
          <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
          . currently: {this.props.filter}
        </p>
      </div>
    )
  }
}

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
