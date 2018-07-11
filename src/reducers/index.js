import switchPlayerReducer from './switch-player-reducer';
import addMoveReducer from './add-move-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  xIsNext: switchPlayerReducer,
  squares: addMoveReducer
});

export default rootReducer;
