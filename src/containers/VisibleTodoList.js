import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import store from '../store';


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

class VisibleTodoList extends Component {
  componentDisMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render () {
    // const props = this.props;
    const state = store.getState();
    return (
      <TodoList todos={getVisibleTodos(state.todos, state.filter)}
        onTodoClick={(id) => { store.dispatch({ type: 'TODO_TOGGLE', id }) }} />
    )
  }
}

export default VisibleTodoList;
