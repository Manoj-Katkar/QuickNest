import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CrossIconBlack from '../../../assets/icons/CrossIconBlack';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import {screenWidth} from '../../responsive';

const PaymentUnsuccessful = ({navigation}: any) => {
  const navigateBackHandle = () => {
    navigation?.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.icon} onPress={navigateBackHandle}>
        <CrossIconBlack width={30} height={30} />
      </TouchableOpacity>

      <View style={styles.errorContainer}>
        <View>
          <FastImage
            source={Image.Payment_unsuccessful}
            resizeMode={FastImage.resizeMode.contain} //^compulsory I have to give
            style={styles.image}
          />

          <Text style={styles.sucessText}>Payment unsuccessful</Text>
          <Text style={styles.sucessPara}>
            Oops! Something went wrong with your{'\n'} payment. Please check
            your details and try{'\n'} again.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth * 0.99,
    height: 230,
    alignSelf: 'center',
  },
  sucessText: {
    color: '#FF3B3B',
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
    lineHeight: 22,
  },
  icon: {
    position: 'absolute',
    top: 22,
    left: 13,
  },
});

export default PaymentUnsuccessful;
