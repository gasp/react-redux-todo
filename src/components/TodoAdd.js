import React from 'react';

const TodoAdd = ({ onAddClick }) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        onAddClick(input.value)
        input.value = '';
      }}>
        Add todo
      </button>
    </div>
  );
};

export default TodoAdd;
