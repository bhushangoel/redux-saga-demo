import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
// 1. import createSagaMiddleware
import createSagaMiddleware from 'redux-saga';

import Counter from './Counter';
import reducer from './reducers';

// 2. import custom made saga
import rootSaga from './sagas';

// 3. creating saga middleware which will consist of all sagas
const sagaMiddleware = createSagaMiddleware();

// 4. connecting to the redux store using applyMiddleware
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// 5. start our saga: right now our saga is not associated with any action.
sagaMiddleware.run(rootSaga);

const action = (type) => store.dispatch({ type });

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
