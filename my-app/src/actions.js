export const ACTION_ADD = "ACTION_ADD";
export const ACTION_MINUS = "ACTION_MINUS";
export const ACTION_RESET = "ACTION_RESET";
export const ACTION_ADD_NUMBER = "ACTION_ADD_NUMBER";
export const ACTION_MINUS_NUMBER = "ACTION_MINUS_NUMBER";

export const createAddAction = () => ({ type: ACTION_ADD });
export const createMinusAction = () => ({ type: ACTION_MINUS });

export const createAddNumberAction = (value) => ({
  type: ACTION_ADD_NUMBER,
  value,
});

export const createMinusNumberAction = (value) => ({
  type: ACTION_MINUS_NUMBER,
  value,
});
