import switchPlayerReducer from './../../src/reducers/switch-player-reducer';
import c from './../../src/constants';

describe('switchPlayerReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(switchPlayerReducer({}, { type: null})).toEqual({});
  });

  let action;
  test('Should successfully change player turn value to false', () => {
    action = {
      type: c.SWITCH_PLAYER,
      xIsNext: false
    };
    expect(switchPlayerReducer(true, action)).toEqual(
      false
    );
  });
});
