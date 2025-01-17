import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenWidth} from '../../responsive';
import PreviousIcon from '../../../assets/icons/PreviousIcon';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';

const NothingHere = ({navigation}: any) => {
  const navigateBackHandle = () => {
    navigation?.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.icon} onPress={navigateBackHandle}>
        <PreviousIcon width={30} height={30} />
      </TouchableOpacity>

      <View style={styles.errorContainer}>
        <View>
          <FastImage
            source={Image.NothingHereImage}
            resizeMode={FastImage.resizeMode.contain} //^compulsory I have to give
            style={styles.image}
          />

          <Text style={styles.sucessText}>Oops! Nothing here</Text>
          <Text style={styles.sucessPara}>
            There’s nothing here at the moment. Please{'\n'} check back later.{' '}
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
    height: 310,
    alignSelf: 'center',
  },
  sucessText: {
    color: '#2B2B2B',
    fontSize: 20,
    fontFamily: 'Mulish-SemiBold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  sucessPara: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2Bs',
    textAlign: 'center',
    lineHeight: 22,
  },
  icon: {
    position: 'absolute',
    top: 22,
    left: 13,
    paddingTop: 30,
  },
});

export default NothingHere;
