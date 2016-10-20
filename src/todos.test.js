import todos from './todos';

it('tests TODO_ADD', () => {
  const stateBefore = [];
  const action = {
    type: 'TODO_ADD',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);

});

it('tests TODO_TOGGLE', () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ];
  const action = {
    type: 'TODO_TOGGLE',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ];
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
});
