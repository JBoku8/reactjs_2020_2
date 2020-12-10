import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  SET_LANGUAGE,
  RESET_LANGUAGE,
} from "../constants/action-types";

export const fetchUsers = () => ({
  type: FETCH_USERS,
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const getUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsers());
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch(fetchUsersSuccess(json));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err));
      });
  };
};

/**
 *
 * LANGUAGE REDUCER
 */

export const setLanguage = (newLang) => ({
  type: SET_LANGUAGE,
  active: newLang,
});
export const resetLanguage = () => ({
  type: RESET_LANGUAGE,
});
