import React from 'react';
import { connect } from 'react-redux';
import { todoAdd } from '../actions';

const TodoAdd =  ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(todoAdd(input.value));
        input.value = '';
      }}>
        Add todo
      </button>
    </div>
  );
};


export default connect()(TodoAdd);
