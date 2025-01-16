import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import {screenWidth} from '../../responsive';
import HomeLocationIcon from '../../../assets/icons/HomeLocationIcon';
import DropDownIcon from '../../../assets/icons/DropDownIcon';
import DropDownUpIcon from '../../../assets/icons/DropDownUpIcon';
import CustomDefaultLocation from '../../components/custom-default-location';

const PanicPress = ({navigation}: any) => {
  const [currentHomeLocation, setCurrentHomeLocation] = useState(
    `Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA.`,
  );

  const navigateToBackScreen = () => {
    navigation?.goBack();
  };

  const handleToPanicActiveScreen = () => {
    navigation.navigate('PanicActive');
  };

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <CustomDefaultLocation currentHomeLocation={currentHomeLocation} />
        <View style={styles.emergencyTextContainer}>
          <Text style={styles.needHelpText}>Emergency? Need help?</Text>
          <Text style={styles.pressBtnText}>Press the below button</Text>
        </View>
        <View style={styles.imageParent}>
          <TouchableOpacity onPress={handleToPanicActiveScreen}>
            <FastImage
              source={Image.PanicPressImage}
              resizeMode={FastImage.resizeMode.contain}
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
    paddingTop: 60,
  },
  parent: {
    width: '92%',
    alignSelf: 'center',
  },

  emergencyTextContainer: {
    marginTop: 20,
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
    // backgroundColor: 'yellow',
    width: '110%',
    alignSelf: 'center',
    marginTop: 5,
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
    borderWidth: 1,
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
