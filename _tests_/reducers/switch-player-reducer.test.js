import switchPlayerReducer from './../../src/reducers/switch-player-reducer';

describe('switchPlayerReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(switchPlayerReducer({}, { type: null})).toEqual({});
  });
});
