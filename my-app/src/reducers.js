import {
  ACTION_ADD,
  ACTION_ADD_NUMBER,
  ACTION_MINUS,
  ACTION_RESET,
  ACTION_MINUS_NUMBER,
} from "./actions";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_ADD:
      return { count: state.count + 1 };
    case ACTION_ADD_NUMBER:
      return { count: state.count + action.value };

    case ACTION_MINUS:
      return { count: state.count - 1 };
    case ACTION_MINUS_NUMBER:
      return { count: state.count - action.value };

    case ACTION_RESET:
      return { count: 0 };

    default:
      return state;
  }
};
