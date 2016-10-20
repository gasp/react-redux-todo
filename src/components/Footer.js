import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({ filter, onFilterClick }) => (
  <p>
    Show: {' '}
    <FilterLink filter='SHOW_ALL' onClick={onFilterClick} currentFilter={filter}>All</FilterLink> | {' '}
    <FilterLink filter='SHOW_ACTIVE' onClick={onFilterClick} currentFilter={filter}>Active</FilterLink> | {' '}
    <FilterLink filter='SHOW_COMPLETED' onClick={onFilterClick} currentFilter={filter}>Completed</FilterLink>
  </p>
);

export default Footer;
