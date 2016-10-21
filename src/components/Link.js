import React from 'react';

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#' onClick={ ev => {
      ev.preventDefault();
      onClick();
    }}>{children}</a>
  );
};

export default Link;
