
import { v4 } from 'node-uuid';

export const todoAdd = (text) => ({
  type: 'TODO_ADD',
  id: v4(),
  text
});

export const todoToggle = (id) => ({
  type: 'TODO_TOGGLE',
  id
});

export const filterSet = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
