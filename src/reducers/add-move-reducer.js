import c from './../constants';

export default (state = [Array(9).fill(null)], action) => {
  let newState;
  switch(action.type) {
    case c.ADD_MOVE:
      const { squares } = action;
      newState = state.concat([squares]);
      return newState;
    default: {
      return state;
    }
  }
};
