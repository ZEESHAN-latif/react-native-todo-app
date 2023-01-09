import { LOGIN_FOR_NAVIGATE, LOGIN_REQUEST, LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESSS, REGISTER_USER_IN_LOGIN } from "./types"


export const loginRequest = (data) => ({
    type : LOGIN_REQUEST,
    data,
});

export const loginSuccess = (data) => ({
    type : LOGIN_REQUEST_SUCCESSS,
    data,
});

export const loginFailure = (data) => ({
    type : LOGIN_REQUEST_FAILURE,
    data,
});

export const registerForLogin = (data) => ({
    type : REGISTER_USER_IN_LOGIN,
    data,
});

export const loginForNavigate = (data) => ({
    type : LOGIN_FOR_NAVIGATE,
    data,
});



