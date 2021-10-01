export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('INCREMENT reducer called');
      return state + 1;
    case 'INCREMENT_IF_ODD':
      console.log('INCREMENT_IF_ODD reducer called');
      return state % 2 !== 0 ? state + 1 : state;
    case 'DECREMENT':
      console.log('DECREMENT reducer called');
      return state - 1;
    default:
      return state;
  }
}
