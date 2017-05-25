import { fromJS } from 'immutable';

const _defaultState = fromJS({
  colors: {
    red: 100,
    green: 200,
    blue: 150
  },
  intensity: 100,
  weight: 10
});

const parameterReducer = (state = _defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default parameterReducer;
