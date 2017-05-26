export const UPDATE_PARAM = "UPDATE_PARAM";
export const UPDATE_COLOR = "UPDATE_COLOR";

export const updateParam = (param, amt) => ({
  type: UPDATE_PARAM,
  param,
  amt
});

export const updateColor = (color, amt) => ({
  type: UPDATE_COLOR,
  color,
  amt
});
