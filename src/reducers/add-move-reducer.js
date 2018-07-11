import c from './../constants';

export default (state = Array(9).fill(null), action) => {
  let newState;
  const { squares } = action;
  switch(action.type) {
  case c.ADD_MOVE:
    newState = squares;
    return newState;
  default: {
    return state;
  }
  }
};
