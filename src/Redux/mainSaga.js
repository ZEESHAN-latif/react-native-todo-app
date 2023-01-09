import { all } from 'redux-saga/effects';

// sagas
import Login from '../screens/login/redux/saga';
import Main from '../screens/Main/redux/saga';

export function* mainSaga() {
  yield all([
    Login,
    Main
  ]);
}
