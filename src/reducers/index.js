import switchPlayerReducer from './switch-player-reducer';
import addMoveReducer from './add-move-reducer';
import currentStepReducer from './current-step-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  xIsNext: switchPlayerReducer,
  history: addMoveReducer,
  stepNumber: currentStepReducer
});

export default rootReducer;
