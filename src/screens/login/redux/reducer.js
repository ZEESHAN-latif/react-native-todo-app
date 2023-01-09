import { LOGIN_FOR_NAVIGATE, LOGIN_REQUEST, LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESSS, REGISTER_USER_IN_LOGIN } from "./types";

const initialState = {
  data: false,
  requesting: false,
  error: false,
  registerdata : false,
  loginDataValidate: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        requesting: true,
      };

      case LOGIN_REQUEST_SUCCESSS:
        return {
          ...state,
          requesting: false,
          data,
        };

        case LOGIN_REQUEST_FAILURE:
            return {
              ...state,
              requesting:false,
              error: action.data,
            };


        case REGISTER_USER_IN_LOGIN:
          console.log("rducer called",action.data);
          return {
            ...state,
            requesting:false,
            registerdata: action.data,
          };

          case LOGIN_FOR_NAVIGATE:
            console.log("rducer called",action.data);
            return {
              ...state,
              requesting:false,
              loginDataValidate: action.data,
            };


    default:
      return state;
  }
};
