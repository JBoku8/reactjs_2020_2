import { SET_LANGUAGE, RESET_LANGUAGE } from "../constants/action-types";

const initialState = {
  active: "GE",
  langs: ["EN", "GE", "RU", "DE", "ES"],
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case SET_LANGUAGE:
      return {
        ...state,
        active: action.active,
      };
    case RESET_LANGUAGE:
      return initialState;
  }
}
