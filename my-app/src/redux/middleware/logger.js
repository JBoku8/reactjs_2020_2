import { createActionMaxNumberLimit } from "../actions/counter";

export default function Logger({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      //   console.log("[LOGGER START]");
      //   console.log(action);
      //   console.log("[LOGGER END]");
      if (action.value && action.value > 10) {
        return dispatch(createActionMaxNumberLimit());
      }
      next(action);
    };
  };
}
