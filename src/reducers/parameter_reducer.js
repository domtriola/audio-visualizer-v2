import { fromJS } from 'immutable';
import { UPDATE_COLOR, UPDATE_PARAM } from '../actions/parameter_actions';

const _defaultState = fromJS({
  colors: {
    red: 175,
    green: 175,
    blue: 175
  },
  intensity: 30,
  weight: 5
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
