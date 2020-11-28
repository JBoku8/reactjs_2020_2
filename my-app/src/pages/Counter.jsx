import { useReducer } from "react";

import {
  ACTION_RESET,
  createAddAction,
  createMinusAction,
  createAddNumberAction,
  createMinusNumberAction,
} from "../actions";

import { counterReducer } from "../reducers";

const initialState = {
  count: 0,
};

function Counter(props) {
  const [counter, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h2>Counted: {counter.count}</h2>
      <button onClick={() => dispatch(createAddAction())}>+</button>
      <button onClick={() => dispatch(createAddNumberAction(5))}>+5</button>
      <button onClick={() => dispatch(createAddNumberAction(10))}>+10</button>
      <button onClick={() => dispatch({ type: ACTION_RESET })}>Reset</button>
      <button onClick={() => dispatch(createMinusAction())}>-</button>
      <button onClick={() => dispatch(createMinusNumberAction(5))}>-5</button>
      <button onClick={() => dispatch(createMinusNumberAction(10))}>-10</button>
    </div>
  );
}

export default Counter;
