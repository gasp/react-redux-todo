import React, { Component } from 'react';
import Link from '../components/Link';
import store from '../store';

class FilterLink extends Component {
  componentDisMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link active={props.filter === state.filter}
        onClick={() => store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: props.filter
        })}>
        {props.children}
      </Link>
    )
  }
}

export default FilterLink;
