/**
 *
 * createStore
 *
 * getState
 * subscribe
 * unsubscribe
 * dispatch
 */

const createStore = (reducer) => {
  let state = reducer(undefined, {});
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((oldListener) => oldListener !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
};

const ACTION_HELLO = "ACTION_HELLO";

const initialState = {
  text: "default",
  users: [],
  articles: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case ACTION_HELLO:
      return {
        ...state,
        text: "hello world",
      };
  }
}

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => {
  console.log("STATE update");
});
// unsubscribe();
store.dispatch({
  type: ACTION_HELLO,
});
console.log(store.getState());
