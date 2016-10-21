import React, { Component } from 'react';
import TodoList from '../components/TodoList';

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
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render () {
    const { store } = this.context;
    const state = store.getState();
    return (
      <TodoList todos={getVisibleTodos(state.todos, state.filter)}
        onTodoClick={(id) => { store.dispatch({ type: 'TODO_TOGGLE', id }) }} />
    )
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
};

export default VisibleTodoList;
