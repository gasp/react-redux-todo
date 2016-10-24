import React from 'react';

let nextTodoId = 0;
const TodoAdd = (props, { store }) => {
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

TodoAdd.contextTypes = {
  store: React.PropTypes.object
};

export default TodoAdd;
