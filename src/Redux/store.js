import combinedReducers from './mainReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mainSaga } from './mainSaga';

const sagaMiddleware = createSagaMiddleware();



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Login'],
};

const persistedReducer = persistCombineReducers(persistConfig, combinedReducers);

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(mainSaga);

export { store };
