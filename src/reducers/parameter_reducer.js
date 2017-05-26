import { fromJS } from 'immutable';
import { UPDATE_COLOR, UPDATE_PARAM } from '../actions/parameter_actions';

const _defaultState = fromJS({
  colors: {
    red: 255,
    green: 255,
    blue: 255
  },
  intensity: 100,
  weight: 10
});

const parameterReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case UPDATE_PARAM:
      return state.set(action.param, action.amt);
    case UPDATE_COLOR:
      let colors = state.get('colors');
      colors = colors.set(action.color, action.amt);
      return state.set('colors', colors);
    default:
      return state;
  }
};

export default parameterReducer;
