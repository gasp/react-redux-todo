import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

import store from './store';

let nextTodoId = 0;
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          store.dispatch({ type: 'TODO_ADD', text: 'Test', id: nextTodoId++});
        }}>add Todo</button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

window.store = store;

const render = () => {
  console.log('render');
  ReactDOM.render(
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();
