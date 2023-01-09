import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// components
// import images from '../../theme/images';

const SplashScreen = () => {
  // const { fill, center } = layout;
  return (
    <View style={[ styles.container]}>
      <Image resizeMode="cover" style={styles.image} source={{uri:'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_960_720.png'}} />
      <Text style={styles.text}>PortFolio</Text>
      <Text style={{fontSize:10, color:"black"}}>Welcome Homes . Anywhere! </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  image: { width: 92, height: 110, resizeMode: 'contain' },
  text: {
    fontSize: 30,
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
