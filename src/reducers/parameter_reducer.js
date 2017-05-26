import { fromJS } from 'immutable';
import { UPDATE_COLOR } from '../actions/parameter_actions';

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
    case UPDATE_COLOR:
      let colors = state.get('colors');
      colors = colors.set(action.color, action.amt);
      return state.set('colors', colors);
    default:
      return state;
  }
};

export default parameterReducer;
