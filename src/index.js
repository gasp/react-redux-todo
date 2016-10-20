import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

import store from './store';


const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

window.store = store;

const render = () => {
  console.log('render');
  ReactDOM.render(
    <Counter value={store.getState()}
      onIncrement={() => store.dispatch({
        type: 'INCREMENT'
      })}
      onDecrement={() => store.dispatch(
        {type: 'DECREMENT'})
      }
      />,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();
