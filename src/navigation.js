import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login/index.js';
import OnBoardScreen1 from './screens/splash/onBoardScrren1.js';
import OnBoardScreen2 from './screens/splash/onBoardScrren2.js';
import OnBoardScreen3 from './screens/splash/onBoardScrren3.js';
import SignUp from './screens/Register/index.js';
import Main from './screens/Main/index.js';
import { connect } from 'react-redux';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Icon } from '@rneui/themed';
import Item from './screens/Items/index.js';
import Cart from './screens/Cart/index.js';

const Navigation = (props) => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


const {loginData} = props;

  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {loginData ? (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Main') {
                iconName = focused
                  ? 'user'
                  : 'user';
              }else if (route.name === 'Items') {
                iconName = focused ? 'home' : 'home';
              }else if (route.name === 'cart') {
                iconName = focused ? 'shoppingcart' : 'shoppingcart';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={30} color={color} type="antdesign" />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
          })}
        >
          <Tab.Screen
            name="Main"
            component={Main}
            options={{title: 'Welcome'}}
          />
           <Tab.Screen
            name="Items"
            component={Item}
            options={{title: 'Product List'}}
          />
  <Tab.Screen
            name="cart"
            component={Cart}
            options={{title: 'Cart'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
        
            <Stack.Screen
            name="splash1"
            component={OnBoardScreen1}
            options={{title: ''}}
            
          />
          <Stack.Screen
            name="splash2"
            component={OnBoardScreen2}
            options={{title: ''}}
          />
          <Stack.Screen
            name="splash3"
            component={OnBoardScreen3}
            options={{title: ''}}
          />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}

      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
};

// export default Navigation;


const mapStateToProps = state => ({
    loginData: state.Login.loginDataValidate
  });
  
  const mapDispatchToProps = dispatch => ({
    // getData: () => dispatch(getData()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navigation);