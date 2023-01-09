import { all, call, put, takeLatest } from 'redux-saga/effects';
import { loginFailure, loginSuccess } from './action';
import { LOGIN_REQUEST } from './types';





function loginAPI(data) {
    // const URL = "https://jsonplaceholder.typicode.com/posts";
    const options = {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      method: 'GET',
      data,
    }
  
    return XHR(URL, options);
  }


function* login({ data }) {
    console.log('data: ', data);
    try {
      const response = yield call(loginAPI, data);
      // const token = AsyncStorage.setItem('authToken', response?.data?.token);
      showMessage({
        message: 'Login successfully!.',
        type: 'success',
      });
      console.log('login response: ', response);
      if (token) {
        // yield put(createStripeCustomerRequest(token));
      }
      yield put(loginSuccess(response?.data?.user));
    } catch (e) {
      console.log('e.response', e.response);
      const { response } = e;
      showMessage({
        message: response?.data?.non_field_errors
          ? response?.data?.non_field_errors[0]
          : response?.data?.email
          ? response?.data?.email[0]
          : response?.data?.password[0],
        type: 'danger',
      });
      yield put(loginFailure(response));
    }
  }



  export default all([
    takeLatest(LOGIN_REQUEST, login)
  ])