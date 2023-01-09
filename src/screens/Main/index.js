import {useEffect, useState} from 'react';
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
import {Icon} from '@rneui/themed';

import {connect} from 'react-redux';
import {getData, getImages} from './redux/action';

const Main = props => {
  useEffect(() => {
    getData();
    getImages();
  }, []);

  const {productData, getData, getImages, ImagesData} = props;
  const [isVisible, setModalVisible] = useState(false);
  const [modalTitle, setmodalTitle] = useState('');
  const [modalDetails, setmodalDetails] = useState('');
  const [modalId, setmodalId] = useState('');

  // console.log(ImagesData,"data api")

  const pressHandler = item => {
    setmodalTitle(item.title);
    setmodalDetails(item.body);
    setmodalId(item.id);
    setModalVisible(!isVisible);
  };

  return (
    <>
      <ScrollView style={{padding: 6}}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Data List </Text>
        {productData
          ? productData.map((item, i) => (
              <Pressable
                key={i}
                style={styles.card}
                onPress={() => pressHandler(item)}>
                <Text style={{color: 'black', fontSize: 15}}>
                  UserId : {item.userId}
                </Text>
                <Text
                  style={{color: 'black', textAlign: 'center', fontSize: 20}}>
                  Title
                </Text>
                <Text style={{color:"black"}}> Title : {item.title}</Text>
                <Text
                  style={{color: 'black', textAlign: 'center', fontSize: 20}}>
                  Details
                </Text>
                <Text style={{color:"black"}}> {item.body}</Text>
              </Pressable>
            ))
          : null}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setModalVisible(!isVisible)}>
        <View style={styles.modalContainer}>
          <View style={{display:"flex", alignSelf:"flex-end"}}>
            <Icon name="cross" type="entypo" size={44} color="red" onPress={() => setModalVisible(!isVisible)}/>
          </View>

          <View style={styles.card}>
            <Image
              source={{uri: ImagesData}}
              style={{height: 300, width: 300}}
              resizeMode="cover"
            />
          </View>
          <Text style={{fontSize: 16, fontWeight: 'bold',color:"black"}}>{modalId}</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color:"black"}}>Tiltle</Text>
          <Text style={{color:"black"}}>{modalTitle}</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color:"black"}}>Details</Text>
          <Text style={{color:"black"}}>{modalDetails}</Text>
        </View>
      </Modal>
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
  productData: state.Main.productData,
  ImagesData: state.Main.imageData,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  getImages: () => dispatch(getImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
