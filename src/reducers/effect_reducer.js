import { Map } from 'immutable';
import { UPDATE_EFFECT } from '../actions/effect_actions';

const _defaultState = Map({
  name: "ripples"
});

const dataReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case UPDATE_EFFECT:
      return state.set('name', action.effectName);
    default:
      return state;
  }
};

export default dataReducer;
