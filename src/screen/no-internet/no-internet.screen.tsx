import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import {screenWidth} from '../../responsive';

const NoInternet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.errorContainer}>
        <View>
          <FastImage
            source={Image.NoInternetImage}
            resizeMode={FastImage.resizeMode.contain} //^compulsory I have to give
            style={styles.image}
          />

          <Text style={styles.sucessText}>Network disconnected</Text>
          <Text style={styles.sucessPara}>
            Your Wi-Fi is disconnected. Please check {'\n'}your connection or
            try reconnecting.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    width: screenWidth * 0.99,
    height: 290,
    alignSelf: 'center',
  },
  sucessText: {
    color: '#2B2B2B',
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
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
});

export default NoInternet;
