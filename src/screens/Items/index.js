import {Icon} from '@rneui/base';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Text,
  Modal,
  Pressable,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {loginForNavigate} from '../login/redux/action';
import { addCart } from './redux/action';

const Item = props => {
  const ItemsData = [
    {
      id: 1,
      name: 'shirt',
      color: 'Sky-blue',
      price: 1200,
      pic: 'https://herakoi.com/wp-content/uploads/sites/3/2020/12/image-01-3.jpg',
    },
    {
      id: 2,
      name: 'sleepin-bag',
      color: 'Black',
      price: 1200,
      pic: 'https://herakoi.com/wp-content/uploads/sites/3/2020/12/dummy-product-02-1.jpg',
    },
    {
      id: 3,
      name: 'Table',
      color: 'Yellow',
      price: 1200,
      pic: 'https://herakoi.com/wp-content/uploads/sites/3/2020/12/dummy-product-11.jpg',
    },
    {
      id: 4,
      name: 'Dummy-product',
      color: 'Multi',
      price: 1500,
      pic: 'https://herakoi.com/wp-content/uploads/sites/3/2020/12/dummy-product-18.jpg',
    },
  ];

  const {logoutForNavigate, addCart} = props;
  return (
    <>
        <View style={{display: 'flex', alignSelf: 'flex-end', margin: 8}}>
      <Icon
          name="logout"
          type="MaterialIcons"
          color={'red'}
          size={40}
          onPress={() => {
            logoutForNavigate(false);
          }}
        />
        {/* <Button title='Click' onPress={()=> props.navigation.navigate('cart')}/> */}
      </View>
      <ScrollView style={{padding: 6}}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Data List </Text>
        {ItemsData
          ? ItemsData.map((item, i) => (
              <Pressable
                key={i}
                style={styles.card}
                >
                <View style={styles.card}>
                  <Image
                    source={{uri: item.pic}}
                    style={{height: 200, width: 200, alignSelf:"center"}}
                    resizeMode="cover"
                  />
                </View>

                <Text
                  style={{color: 'black', textAlign: 'center', fontSize: 20}}>
                  {item.name}
                </Text>
                <Text style={{color: 'black'}}>Color : {item.color}</Text>
                <Text style={{color: 'black'}}>Price  : {item.price}</Text>
                {/* <Text
                  style={{color: 'black', textAlign: 'center', fontSize: 20}}>
                  Details
                </Text> */}
              <Button title="AddToCart" onPress={(e)=> addCart(item)}/>
              </Pressable>
            ))
          : null}
      </ScrollView>
   
    </>
  );
};

const styles = StyleSheet.create({
  cartNo: {
    color: 'red',
    marginTop: -6,
    fontSize: 20,
    position: 'absolute',
    right: 8,
    backgroundColor: 'yellow',
  },
  cartIcon: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    margin: 8,
  },
  textBox: {
    borderColor: 'brown',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 25,
    color: 'white',
  },
  textStyle: {
    fontSize: 16,
    marginLeft: '50%',
    color: 'white',
  },
  card: {
    margin: 14,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    elevation: 10,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 680,
    alignItems: 'center',
    backgroundColor: '#E3E2DF',
    // justifyContent: 'space-between',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

const mapStateToProps = state => ({
  // logoutValidate: state.Login.loginDataValidate
});

const mapDispatchToProps = dispatch => ({
  logoutForNavigate: data => dispatch(loginForNavigate(data)),
  addCart: data => dispatch(addCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
