import {View, Image, Text, Modal, Pressable, ScrollView, ImageBackground} from 'react-native';
import {useEffect, useState} from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
  const [formCondition, setFormCondition] = useState(false);
  const [cartDetails, setcartDetails] = useState(false);

  useEffect(()=>{
cartDetails
  }, [cartData])

  useEffect(()=>{
    cartData && setcartDetails(cartData)
  }, [cartData])
  const {cartData} = props;

  const totalBill = cartData.map((item)=>item.price).reduce((prev,next) => prev + next, 0);
  const Bill = () => {
    setFormCondition(true);
  };

  console.log("**********",cartDetails);
  return (
    <ImageBackground 
    source={{uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/08/background-159244_960_720.png'}}
    style={{flex: 1}}>
      <ScrollView>
        {cartDetails ? cartDetails.map((item, i) => (
          <View key={i}>
            <View
              style={{
                padding: 4,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 50, width: 50}}
                source={{uri: item.pic}}
                alt={item.name}
              />
              <Text>name {item.name} </Text>
              <Text>Color: {item.color}</Text>
              <Text>Price: {item.price}</Text>
            </View>
          </View>
        )
        ):null}
      </ScrollView>

      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          borderWidth:1,
          borderColor:"red"
        }}>
        <Pressable onPress={Bill}>
          <Text
            style={{
              color: 'blue',
              backgroundColor: 'white',
              alignSelf: 'flex-end',
              width: 50,
              borderRadius: 20,
              textAlign: 'center',
              borderWidth:1,
              borderColor:"gray",
              elevation:5
            }}>
            Bill
          </Text>
        </Pressable>
      </View>

      {/* ************************ */}
      <View>
        <Modal
          visible={formCondition}
          transparent
          animationType="slide"
          onRequestClose={() => setFormCondition(false)}
          style={{justifyContent: 'center'}}>
          <View
            style={{
              borderTopStartRadius: 20,
              borderTopRightRadius: 20,
              justifyContent: 'center',
              flex: 1,
              padding: 8,
            }}>
            <View style={{backgroundColor: 'white', borderRadius: 20}}>

                {/* Bill Summary ............................. */}
              <View>

                <Text style={{textAlign: 'center', fontSize: 30, color:"black"}}> Bill Summary</Text>
                <Text style={{textAlign: 'center', fontSize: 20}}> Total Bill :{totalBill? totalBill : 0}</Text>
                <Text style={{textAlign: 'center', fontSize: 20}}> Discount : 999</Text>
                <Text style={{textAlign: 'center', fontSize: 20}}> After Discount : {totalBill? totalBill-999 : 0}</Text>

              </View>

              <Pressable
                onPress={() => {
                  setFormCondition(false), alert('Payment add successfully');
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: 4,
                    fontSize: 20,
                    backgroundColor: 'blue',
                    width: 50,
                    marginBottom: 12,
                    borderWidth: 1,
                    borderRadius: 10,
                    color: 'white',
                    alignSelf:"center"
                  }}>
                  Pay
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

// export default Cart;
const mapStateToProps = state => ({
    cartData: state.Items.cartData
  });
  
  const mapDispatchToProps = dispatch => ({
    // logoutForNavigate: data => dispatch(loginForNavigate(data)),
    // addCart: data => dispatch(addCart(data)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);