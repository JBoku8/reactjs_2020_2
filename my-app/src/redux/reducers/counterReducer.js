import {
  ACTION_ADD,
  ACTION_MINUS,
  ACTION_RESET,
  ACTION_ADD_NUMBER,
  ACTION_MINUS_NUMBER,
  ACTION_MAX_NUMBER_LIMIT,
} from "../actions/counter";

const initialState = {
  count: 0,
  date: Date.now(),
  message: "Bla bla bla",
};

export const counterReducer = (state = initialState, action) => {
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

    case ACTION_MAX_NUMBER_LIMIT:
      return { count: 0, message: action.message };

    default:
      return state;
  }
};
