import {
  IMAGES_DATA,
  IMAGES_DATA_FAILURE,
  IMAGES_DATA_SUCCESS,
  PRODUCTS_DATA,
  PRODUCTS_DATA_FAILURE,
  PRODUCTS_DATA_SUCCESS,
} from './types';

const initialState = {
  data: false,
  requesting: false,
  error: false,
  productData: false,
  imageData: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_DATA:
      return {
        ...state,
        requesting: true,
      };

    case PRODUCTS_DATA_SUCCESS:
      // console.log('productData reducer........');
      return {
        ...state,
        requesting: true,
        productData: action.data,
      };

    case PRODUCTS_DATA_FAILURE:
      return {
        ...state,
        requesting: true,
        error: action.data,
      };

      case IMAGES_DATA:
      return {
        ...state,
        requesting: true,
      };

    case IMAGES_DATA_SUCCESS:
      // console.log('ImagesData reducer........', action.data);
      return {
        ...state,
        requesting: true,
        imageData: action.data,
      };

    case IMAGES_DATA_FAILURE:
      return {
        ...state,
        requesting: true,
        error: action.data,
      };

    default:
      return state;
  }
};
