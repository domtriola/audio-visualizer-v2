import { Map } from 'immutable';

const _defaultState = Map({
  name: ""
});

const dataReducer = (state = _defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default dataReducer;
