# redux-saga-demo

Demo inspired from [Redux/Redux-saga beginner tutorial.](https://github.com/redux-saga/redux-saga/blob/master/docs/introduction/BeginnerTutorial.md) You can visit [this](https://redux-saga.js.org/) website for more in depth knowledge.

[Play around on stackblitz](https://stackblitz.com/edit/react-6jfz9n)

## Flow

In this code sample, there are three button shown -

- Increment after 1 second: async
- Increment
- Decrement

## Following files are to look for

### index.js

Main entry point where all the `imports` and `configuration` related to **redux store and redux saga** is made. It also renders a `Counter` component which consists of 3 buttons dispatching some actions.

### Counter.js

A simple `component` showing three buttons.

### reducers.js

Here all the `actions` are associated with a function which in turn return a new state.

### sagas.js

In this file -

- We have imported some built in functions(`effects and helper functions`) from `redux-saga`.
- Created some sagas
  - `helloSaga`: It is a simple saga(function). Not associated with any action, so won't execute
  - `watchIncrementAsync`: This is a part of our exported rootSaga function and will be called instantly as soon as our application starts. We have instructed this saga to watch for `INCREMENT_ASYNC` action and call another saga as soon as `INCREMENT_ASYNC` is dispatched from our component.
  - `incrementAsync`: This saga will fire up by `watchIncrementAsync` and execute some async task and then finally dispatch another action `INCREMENT`
