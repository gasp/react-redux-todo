const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter.length? action.filter : 'SHOW_ALL';
    default:
      return state;
  }
}


export default visibilityFilter;
