import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import {screenWidth} from '../../responsive';

const PanicPress = ({navigation}: any) => {
  const navigateToBackScreen = () => {
    navigation?.goBack();
  };

  const handleToPanicActiveScreen = () => {
    navigation.navigate('PanicActive');
  };
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.toTakeLocation}></View>
        <View style={styles.emergencyTextContainer}>
          <Text style={styles.needHelpText}>Emergency? Need help?</Text>
          <Text style={styles.pressBtnText}>Press the below button</Text>
        </View>
        <View style={styles.imageParent}>
          <TouchableOpacity onPress={handleToPanicActiveScreen}>
            <FastImage
              source={Image.PanicPressImage}
              resizeMode={FastImage.resizeMode.contain} //^compulsory I have to give
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={navigateToBackScreen}>
          <Text style={styles.btnText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 40,
  },
  parent: {
    width: '92%',
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  toTakeLocation: {},
  emergencyTextContainer: {
    marginTop: 170,
  },
  needHelpText: {
    fontSize: 28,
    fontFamily: 'Mulish-SemiBold',
    color: '#2B2B2B',
    textAlign: 'center',
    marginBottom: 10,
  },
  pressBtnText: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
    textAlign: 'center',
  },
  imageParent: {
    // width: '100%',
    // height: 500,
  },
  image: {
    width: screenWidth * 0.99,
    height: 350,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'column',
    width: '89%',
    backgroundColor: '#fafafa',
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#011e62',
    marginBottom: 15,
  },
  btnText: {
    color: '#001E61',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
  },
});

export default PanicPress;
