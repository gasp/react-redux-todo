import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;
const TodoAdd = connect()( ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch({
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
});


export default TodoAdd;
