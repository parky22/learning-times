import * as actions from './actions';

const initialState = {
  count: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREASE_COUNT:
      return { ...state, count: ++state.count }
    default:
      return state;
  }
};

export default reducers;
