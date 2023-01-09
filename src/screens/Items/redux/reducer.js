import { ADD_TO_CART } from "./types";

const initialState = {
    data: false,
    requesting: false,
    error: false,
    cartData: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        // console.log("Reducer called", action.data);
        return {
          ...state,
        //   requesting: true,
            cartData: [action.data, ...state.cartData]
        };
      default:
        return state;
    }
  };
  