/* jshint esnext:true */

if (typeof process === 'object' && typeof window === 'undefined') {
  let localStorage = localStorage || null;
}

export const setStorageEngine = (engine) => {
  localStorage = engine;
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('myRadios');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  } finally {
    // console.log('state loaded');
  }
};

export const saveState = (state) => {
  console.log(localStorage);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('myRadios', serializedState);
  } catch(e) {
    console.error(e);
  }
};
