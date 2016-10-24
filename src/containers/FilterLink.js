import React from 'react';
import { connect } from 'react-redux';
import Link from '../components/Link';
import { filterSet } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(filterSet(ownProps.filter));
  }
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

FilterLink.contextTypes = {
  store: React.PropTypes.object
};

export default FilterLink;
