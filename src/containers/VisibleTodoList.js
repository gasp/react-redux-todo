import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { todoToggle } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(todoToggle(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
};

export default VisibleTodoList;
