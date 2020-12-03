export const ACTION_ADD = "ACTION_ADD";
export const ACTION_MINUS = "ACTION_MINUS";
export const ACTION_RESET = "ACTION_RESET";
export const ACTION_ADD_NUMBER = "ACTION_ADD_NUMBER";
export const ACTION_MINUS_NUMBER = "ACTION_MINUS_NUMBER";
export const ACTION_MAX_NUMBER_LIMIT = "ACTION_MAX_NUMBER_LIMIT";

export const createAddAction = () => ({ type: ACTION_ADD });
export const createMinusAction = () => ({ type: ACTION_MINUS });
export const createActionReset = () => ({ type: ACTION_RESET });

export const createAddNumberAction = (value) => ({
  type: ACTION_ADD_NUMBER,
  value,
});

export const createMinusNumberAction = (value) => ({
  type: ACTION_MINUS_NUMBER,
  value,
});

export const createActionMaxNumberLimit = () => ({
  type: ACTION_MAX_NUMBER_LIMIT,
  message: "Max number limit reached.",
});
