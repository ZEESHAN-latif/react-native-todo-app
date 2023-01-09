import { ADD_TO_CART } from "./types";

export const addCart = (data) => ({
    type : ADD_TO_CART,
    data,
});