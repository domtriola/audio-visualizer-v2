import { combineReducers } from 'redux';
import effectReducer from './effect_reducer';
import parameterReducer from './parameter_reducer';

const rootReducer = combineReducers({
  effect: effectReducer,
  parameters: parameterReducer
});

export default rootReducer;
