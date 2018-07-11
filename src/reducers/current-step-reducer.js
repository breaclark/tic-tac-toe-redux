import c from './../constants';

export default (state = 0, action) => {
  let newState;
  const { stepNumber } = action;
  switch(action.type) {
    case c.SELECT_STEP:
      newState = stepNumber;
      return newState;
    default: {
      return state;
    }
  }
};
