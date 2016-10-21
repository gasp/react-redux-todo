import store from './store';

it('tests store', () => {
  // reset and test clean state
  store.dispatch({type:'RESET'})
  expect(
    store.getState().filter
  ).toEqual('SHOW_ALL');
  expect(
    store.getState().todos
  ).toEqual([]);

  store.dispatch({type:'SET_VISIBILITY_FILTER', filter:'SHOW_COMPLETED'})
  expect(
    store.getState().filter
  ).toEqual('SHOW_COMPLETED');

  store.dispatch({type:'TODO_ADD', text: 'Add a todo', id: Math.floor(Math.random()*100000)});
  expect(
    store.getState().todos[store.getState().todos.length - 1].text
    // same as store.getState().todos[0] but we have to test factually
  ).toEqual('Add a todo');
})
