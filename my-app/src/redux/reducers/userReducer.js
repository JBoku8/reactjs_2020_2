import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "../constants/action-types";

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

// object
// ...spread, Object.assign()
// array
// ..spread, .concat()

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case FETCH_USERS:
      return {
        ...state,
        isLoading: true,
        users: [],
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: null,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        users: [],
      };
  }
}

export default userReducer;
