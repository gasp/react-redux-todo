import { loadState, saveState, setStorageEngine } from './localStorage';

// mock localStorage
let mockStorageData = '';
const mockStorage = {
  setItem(key, data) {
    mockStorage[key] = data;
  },
  getItem(key) {
    return mockStorage[key];
  }
};
setStorageEngine(mockStorage);

it('returns undefined when does not exist', () => {
  expect(loadState()).toEqual(undefined);
});

it('saves an object into state', () => {
  const testObject = {pim:1,pam:2,poum:[{one:1}, {two:"deux"}]};
  saveState(testObject);
  expect(loadState()).toEqual(testObject);
});

it('updates easily', () => {
  let newState = loadState();
  newState.pim = 2
  saveState(newState);
  expect(loadState()).toEqual({pim:2,pam:2,poum:[{one:1}, {two:"deux"}]});
})
