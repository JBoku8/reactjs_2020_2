import * as type from "../types/post-types";
import { startLoading, finishLoading } from "./commonAction";

const baseURL = "http://localhost:1337/posts";

export const getPostsList = (posts) => ({
  type: type.GET_POSTS_LIST,
  payload: posts,
});

export const getPost = (post) => ({
  type: type.GET_POST,
  payload: post,
});

export const getPostCount = (postCount) => ({
  type: type.GET_POSTS_COUNT,
  payload: postCount,
});

export const getPostCountAsync = () => {
  return (dispatch) => {
    dispatch(startLoading());
    return fetch(`${baseURL}/count`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getPostCount(data));
        dispatch(finishLoading());
      })
      .catch((err) => {
        // error
        dispatch(finishLoading());
      });
  };
};
export const getPostAsync = (postId) => {
  return (dispatch) => {
    dispatch(startLoading());

    return fetch(`${baseURL}/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getPost(data));
        dispatch(finishLoading());
      })
      .catch((err) => {
        // error
        dispatch(finishLoading());
      });
  };
};
export const getPostsListAsync = () => {
  return (dispatch) => {
    dispatch(startLoading());

    return fetch(`${baseURL}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getPostsList(data));
        dispatch(finishLoading());
      })
      .catch((err) => {
        // error
        dispatch(finishLoading());
      });
  };
};
