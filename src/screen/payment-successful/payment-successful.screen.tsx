import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import {screenWidth} from '../../responsive';

const PaymentSuccessful = ({navigation}: any) => {
  const handleUserTOHome = () => {
    navigation.navigate('Home');
  };

  const navigateToAddMemberScreen = () => {
    navigation.navigate('AddMember');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.child1}>
        <FastImage
          source={Image.Payment_successful}
          resizeMode={FastImage.resizeMode.contain} //^compulsory I have to give
          style={styles.image}
        />

        <Text style={styles.sucessText}>Payment successful</Text>
        <Text style={styles.sucessPara}>
          You can add the members in your{'\n'}subscription
        </Text>
      </View>
      <View style={styles.child2}>
        <TouchableOpacity
          style={styles.btn}
          onPress={navigateToAddMemberScreen}>
          <Text style={styles.btnText}>Add Member</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleUserTOHome}>
          <Text style={styles.redirectHomeText}>Go to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'flex-end',
    // marginBottom: 20,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  child1: {
    // backgroundColor: 'yellow',
    marginBottom: 120,
  },
  child2: {
    // backgroundColor: 'aqua',
    flexDirection: 'column',
    marginTop: 40,
  },
  image: {
    width: screenWidth * 0.99,
    height: 230,
    alignSelf: 'center',
  },
  sucessText: {
    color: '#2B2B2B',
    fontSize: 20,
    fontFamily: 'Mulish-SemiBold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  sucessPara: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
    textAlign: 'center',
  },
  btn: {
    flexDirection: 'column',
    width: '89%',
    backgroundColor: 'transparent',
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#011e62',
    marginBottom: 15,
    alignSelf: 'center',
  },
  btnText: {
    color: '#001E61',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
  },
  redirectHomeText: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    textAlign: 'center',
    color: '#2B2B2B',
    marginBottom: 20,
  },
});

export default PaymentSuccessful;
