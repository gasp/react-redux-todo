import filter from './filter';

it('tests VISIBILITY_FILTER default filter', () => {
  const stateBefore = {};
  const action = {
    type: 'SET_VISIBILITY_FILTER',
    filter: ''
  };
  const stateAfter = 'SHOW_ALL';
  expect(
    filter(stateBefore, action)
  ).toEqual(stateAfter);

});

it('tests setting a filter', () => {
  const stateBefore = 'AA';
  const action = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'BB'
  };
  const stateAfter = 'BB';
  expect(
    filter(stateBefore, action)
  ).toEqual(stateAfter);
});
