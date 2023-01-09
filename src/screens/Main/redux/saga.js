import {all, call, takeLatest,put} from 'redux-saga/effects';
import axios from 'axios'; 
import { IMAGES_DATA, PRODUCTS_DATA } from './types';
import { getDataSuccess, getImagesSuccess } from './action';


// https://api.thecatapi.com/v1/images/search


const requestImages = async () => {
  const url = 'https://api.thecatapi.com/v1/images/search'
  try {
  
    let response = await axios.get(url);
    //console.log('Fetching through Axios')
    // console.log("Images testing****************",response.data[0].url)
    return response.data[0].url
  } catch (e) {
    console.log(e);
  }
};


function* getImagesApi() {
  //console.log('API CALLING');
  try {
    const res = yield call(requestImages);
    yield put(getImagesSuccess(res))
    // console.log(res, "testing")
  } catch (e) {
    console.log('error catched: ' + e);
  }
}

const requestData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  try {
  
    let response = await axios.get(url);
    //console.log('Fetching through Axios')
    // console.log(response.data)
    return response.data
  } catch (e) {
    console.log(e);
  }
};


function* getApiData() {
  //console.log('API CALLING');
  try {
    const res = yield call(requestData);
    yield put(getDataSuccess(res))
    // console.log(res, "testing")
  } catch (e) {
    console.log('error catched: ' + e);
  }
}


export default all([
  takeLatest(PRODUCTS_DATA, getApiData),
  takeLatest(IMAGES_DATA, getImagesApi)
]);

