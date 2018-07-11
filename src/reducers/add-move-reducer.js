import c from './../constants';

export default (state = Array(9).fill(null), action) => {
  switch(action.type) {
  case c.ADD_MOVE:

    break;
  default: {
    return state;
  }
  }
};
