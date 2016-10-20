import store from './store';

it('tests store', () => {

  store.dispatch({type:'SET_VISIBILITY_FILTER', filter:'SHOW_COMPLETED'})
  expect(
    store.getState().filter
  ).toEqual('SHOW_COMPLETED');

  store.dispatch({type:'TODO_ADD', text: 'Add a todo', id: Math.floor(Math.random()*100000)});
  expect(
    store.getState().todos[0].text
  ).toEqual('Add a todo');
})
