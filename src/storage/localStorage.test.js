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

it('saves an object into state', () => {
  const testObject = {pim:1,pam:2,poum:[{one:1}, {two:"deux"}]};
  saveState('test01', testObject);
  expect(loadState('test01')).toEqual(testObject);
})

it('returns undefined when does not exist', () => {
  expect(loadState('test02-does-not-exists')).toEqual(undefined);
})
