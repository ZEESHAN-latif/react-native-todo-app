import {REGISTER_USER} from './types';

const initialState = {
  data: false,
  requesting: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        requesting: true,
        data: action.data,
      };

    default:
      return state;
  }
};
