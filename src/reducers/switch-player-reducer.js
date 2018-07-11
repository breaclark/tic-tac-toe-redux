import c from './../constants';

export default (state = true, action) => {
  let newState;
  const { xIsNext } = action;
  switch(action.type) {
    case c.SWITCH_PLAYER:
      newState = xIsNext;
      return newState;
    default: {
      return state;
    }
  }
};
