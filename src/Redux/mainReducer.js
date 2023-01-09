import {persistReducer} from "redux-persist"
import AsyncStorage from '@react-native-async-storage/async-storage';

// reducers
import Login from "../screens/login/redux/reducer";
import SignUp from "../screens/Register/redux/reducer";
import Main from "../screens/Main/redux/reducer";
import Items from "../screens/Items/redux/reducer";

// const appPersistConfig = {
//   key: 'Login',
//   storage: AsyncStorage,
//   timeout: null,
// };

export default {
  Login,
  SignUp,
  Main,
  Items
};
