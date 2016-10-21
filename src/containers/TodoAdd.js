import React from 'react';
import store from '../store';

let nextTodoId = 0;
const TodoAdd = () => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'TODO_ADD',
          text: input.value,
          id: nextTodoId ++
        });
        input.value = '';
      }}>
        Add todo
      </button>
    </div>
  );
};

export default TodoAdd;
