import * as type from "../types/post-types";

const initialState = {
  posts: [],
  count: null,
  post: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_POST:
      return {
        ...state,
        post: action.payload,
      };

    case type.GET_POSTS_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    case type.GET_POSTS_LIST:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}
