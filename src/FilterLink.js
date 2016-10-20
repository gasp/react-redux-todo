import React, { Component } from 'react';
import store from './store';

const FilterLink = ({filter, children}) => {
  return (
    <a href='#' onClick={ ev => {
      ev.preventDefault();
      store.dispatch({type: 'SET_VISIBILITY_FILTER', filter});
    }}>{children}</a>
  );
};

export default FilterLink;
