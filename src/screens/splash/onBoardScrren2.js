import { useEffect } from 'react';
import {Button, Image, View, Text, Pressable} from 'react-native';

const OnBoardScreen2 = (props) => {

    useEffect(() => {
        loadScreen();
      });
    
      const loadScreen = () => {
        setTimeout(() => {
        props.navigation.navigate("splash3")
        }, 2000);
      };

  return (
    <View style={{flex: 1}}>
      <Image
        style={{height: 400, width:400, }}
        resizeMode="contain"
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/06/13/15/07/presentation-1454403_960_720.png',
        }}
      />
      <Text style={{textAlign: 'center', marginTop: 20, fontStyle: 'italic', color:"black"}}>
        Navigate any city like a local
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 20,
          fontWeight: 'bold',
          padding: 20,
          paddingTop: 0,
          color:"black"
        }}>
        Navigate any city like a local with PORTFOLIO, Americas virtual
        conclerge services
      </Text>

      <View style={{alignSelf: 'center', width: 120, borderRadius: 100}}>
        <Button 
        color={'#5CDB95'} 
        title="Next >>" 
        onPress={() => {props.navigation.navigate("splash3")}}
        
        />
      </View>
    </View>
  );
};

export default OnBoardScreen2;
