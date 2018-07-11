import addMoveReducer from './../../src/reducers/add-move-reducer';
import c from './../../src/constants';

describe('addMoveReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(addMoveReducer({}, { type: null})).toEqual({});
  });

  let action;
  test('Should successfully change square value to X', () => {
    action = {
      type: c.ADD_MOVE,
      squares: [null, null, null, null, null, null, null, null, 'X']
    };
    expect(addMoveReducer(Array(9).fill(null), action)).toEqual(
      [null, null, null, null, null, null, null, null, 'X']
    );
  });

  test('Should successfully change square value to O', () => {
    action = {
      type: c.ADD_MOVE,
      squares: [null, null, null, 'O', null, null, null, null, null]
    };
    expect(addMoveReducer(Array(9).fill(null), action)).toEqual(
      [null, null, null, 'O', null, null, null, null, null]
    );
  });


});
