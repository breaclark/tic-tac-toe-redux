import addMoveReducer from './../../src/reducers/add-move-reducer';

describe('addMoveReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(addMoveReducer({}, { type: null})).toEqual({});
  });
});
