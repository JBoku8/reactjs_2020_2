import { SET_DATA } from "./actions";

const initialState = {
  data: {},
};

export const reducer = (state = initialState, action) => {
  if (action.type === SET_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }

  return state;
};
