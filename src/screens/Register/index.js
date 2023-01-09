import {Button, Image, TextInput, View, Text, Pressable} from 'react-native';
import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import useForm from '../../hooks/useForm';
// import {registerUser} from './redux/action';
import {registerForLogin} from '../login/redux/action';
import {connect} from 'react-redux';

const SignUp = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const {registerForLogin, userData} = props;

  const registerHandler = () => {
    if (state.name.value && state.email.value && state.password.value) {
      const data =
        {
          userName: state.name.value,
          userEmail: state.email.value,
          userPassword: state.password.value,
        };
      // console.log("data", data)
      registerForLogin(data);
      alert('Data added successfully!');
    } else {
      alert('All fields are required!');
    }
  };

  // console.log("userData.........", userData)

  const stateSchema = {
    name: {
      value: '',
      error: '',
    },
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: '',
    },
  };
  const validationStateSchema = {
    name: {
      required: true,
    },
    email: {
      required: true,
    },
    password: {
      required: true,
    },
  };

  const {state, handleOnChange, disable} = useForm(
    stateSchema,
    validationStateSchema,
  );

  // console.log(
  //   'States',
  //   state.name.value + state.email.value + state.password.value,
  // );

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={{height: 100, width: 100, marginTop: 20}}
        resizeMode="contain"
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_960_720.png',
        }}
      />

      <Text style={{fontSize: 30, marginTop: 20, marginBottom: 10, color:"black"}}>
        Sign Up
      </Text>

      <TextInput
        style={{
          width: 250,
          borderRadius: 10,
          // marginBottom: 20,
          backgroundColor: '#E3E2DF',
          padding: 8,
          color:"black"
        }}
        placeholder="Enter your name"
        defaultValue={state.name.value}
        onChangeText={e => handleOnChange('name', e)}></TextInput>
      {state.name.error ? (
        <View>
          <Text style={{color: 'red', marginEnd: 100}}>
            {state.name.error || ''}
          </Text>
        </View>
      ) : null}

      <TextInput
        style={{
          width: 250,
          borderRadius: 10,
          marginTop: 20,
          backgroundColor: '#E3E2DF',
          padding: 8,
          color:"black"
        }}
        placeholder="example123@gmail.com"
        defaultValue={state.email.value}
        onChangeText={e => handleOnChange('email', e)}></TextInput>
      {state.email.error ? (
        <View>
          <Text style={{color: 'red', marginEnd: 100}}>
            {state.email.error || ''}
          </Text>
        </View>
      ) : null}

      <TextInput
        style={{
          width: 250,
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: '#E3E2DF',
          padding: 8,
          color:"black"
        }}
        placeholder="Enter your password"
        secureTextEntry
        defaultValue={state.password.value}
        onChangeText={e => handleOnChange('password', e)}></TextInput>
      {state.password.error ? (
        <View>
          <Text style={{color: 'red', marginEnd: 100}}>
            {state.password.error || ''}
          </Text>
        </View>
      ) : null}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 20,
          marginTop: 10,
          color:"black"
        }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{marginEnd: 20, marginTop: 6, color:"black"}}>
          I accept all term and conditions
        </Text>
      </View>

      <View style={{alignSelf: 'center', width: 120, borderRadius: 100}}>
        <Button color={'#5CDB95'} title="Register" onPress={registerHandler} />
      </View>

      <Text style={{fontSize: 20, marginTop: 20, color:"black"}}>Or</Text>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View
          style={{backgroundColor: '#E3E2DF', borderRadius: 10, margin: 10}}>
          <Image
            style={{height: 50, width: 50, margin: 10}}
            resizeMode="contain"
            source={require('../../assets/images/fb.png')}
          />
        </View>
        <View
          style={{backgroundColor: '#E3E2DF', borderRadius: 10, margin: 10}}>
          <Image
            style={{height: 50, width: 50, margin: 10}}
            resizeMode="contain"
            source={require('../../assets/images/google.png')}
          />
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{color:"black"}}>Already have an account? </Text>

        <Pressable onPress={() => props.navigation.navigate('Login')}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.Login.registerdata,
});

const mapDispatchToProps = dispatch => ({
  registerForLogin: data => dispatch(registerForLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
