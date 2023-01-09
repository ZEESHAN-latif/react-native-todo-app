import {REGISTER_USER} from './types';

export const registerUser = (data) => ({
    type : REGISTER_USER,
    data,
});
