import rootReducer from './../../src/reducers/index';
import addMoveReducer from './../../src/reducers/add-move-reducer';
import switchPlayerReducer from './../../src/reducers/switch-player-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test ('Should return default state if no action is recognized', () => {
    expect(rootReducer({}, { type: null})).toEqual({
      xIsNext: true,
      squares: Array(9).fill(null)
    });
  });

  test('Should contain addMoveReducer logic', () => {
    expect(store.getState().squares).toEqual(addMoveReducer(undefined, {type: null}));
  });

  test('Should contain switchPlayerReducer logic', () => {
    expect(store.getState().xIsNext).toEqual(switchPlayerReducer(undefined, {type: null}));
  });

});
