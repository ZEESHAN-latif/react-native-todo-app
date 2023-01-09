import {Button, Image, TextInput, View, Text, Pressable} from 'react-native';
import {useState} from 'react';
import { connect } from 'react-redux';
import { loginForNavigate } from './redux/action';

const Login = props => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState(null);

  const {userData, loginForNavigate, navigation} = props;

  const LoginHandler = () => {

    if (userData.userName === name && userData.userPassword === pass){
      navigation.navigate('Main');
      loginForNavigate(true);
    } else {
      alert("Enter correct credentials")
    }
  };

  // console.log("userData.........", userData);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={{height: 100, width: 100, marginTop: 50}}
        resizeMode="contain"
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_960_720.png',
        }}
      />

      <Text style={{fontSize: 30, marginTop: 20, marginBottom: 10, color:"black"}}>Login</Text>

      <TextInput
        style={{
          width: 250,
          borderRadius: 10,
          marginBottom: 20,
          backgroundColor: '#E3E2DF',
          padding: 8,
          color:"black"
        }}
        placeholder="Enter your name"
        defaultValue={name}
        onChangeText={e => setName(e)}></TextInput>

      <TextInput
        style={{
          width: 250,
          borderRadius: 10,
          backgroundColor: '#E3E2DF',
          padding: 8,
          color:"black"
        }}
        placeholder="Enter your password"
        secureTextEntry
        defaultValue={pass}
        onChangeText={e => setPass(e)}></TextInput>

      <Pressable
        onPress={() => {
          /*props.navigation.navigate("Login")*/
        }}>
        <Text style={{marginStart: 130, marginBottom: 20, color:"black"}}>
          Forgot password
        </Text>
      </Pressable>

      <View style={{alignSelf: 'center', width: 120, borderRadius: 100}}>
        <Button color={'#5CDB95'} title="Login >>" onPress={LoginHandler} />
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
        <Text style={{color:"black"}}>Don't have an account?</Text>

        <Pressable onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={{fontWeight: 'bold', color: 'black'}}> Sign UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  userData: state.Login.registerdata
});

const mapDispatchToProps = dispatch => ({
  loginForNavigate: data => dispatch(loginForNavigate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
