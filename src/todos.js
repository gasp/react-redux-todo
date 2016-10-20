const todos = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case 'TODO_ADD':
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }];
    case 'TODO_TOGGLE':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        };
      });
    default:
      return state;
  }
};

export default todos;
