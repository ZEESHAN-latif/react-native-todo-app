import {
  IMAGES_DATA,
  IMAGES_DATA_FAILURE,
  IMAGES_DATA_SUCCESS,
  PRODUCTS_DATA,
  PRODUCTS_DATA_FAILURE,
  PRODUCTS_DATA_SUCCESS,
} from './types';

export const getData = data => ({
  type: PRODUCTS_DATA,
  data,
});

export const getDataSuccess = data => ({
  type: PRODUCTS_DATA_SUCCESS,
  data,
});

export const getDataFailure = data => ({
  type: PRODUCTS_DATA_FAILURE,
  data,
});

export const getImages = data => (
    {
  type: IMAGES_DATA,
  data,
});

export const getImagesSuccess = data => ({
  type: IMAGES_DATA_SUCCESS,
  data,
});

export const getImagesFailure = data => ({
  type: IMAGES_DATA_FAILURE,
  data,
});
