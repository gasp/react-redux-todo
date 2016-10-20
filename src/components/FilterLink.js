import React from 'react';

const FilterLink = ({currentFilter, filter, children, onClick}) => {
  if (currentFilter === filter) {
    return <span>{children}</span>;
  }

  return (
    <a href='#' onClick={ ev => {
      ev.preventDefault();
      onClick(filter);
    }}>{children}</a>
  );
};

export default FilterLink;
