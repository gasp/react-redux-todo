/* jshint esnext:true */

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('myRadios');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  } finally {
    console.log('state loaded');
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('myRadios', serializedState);
  } catch(e) {
    console.error(e);
  }
};

if (typeof require !== 'undefined') {
  const localStorage = null;
}

export const setStorageEngine = (engine) => {
  localStorage = engine;
};
