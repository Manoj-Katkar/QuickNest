import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../../constant/images';

const TradeMark = () => {
  return (
    <View style={styles.mainContainer}>
      <FastImage
        source={Image.tradeMark}
        style={styles.backgroundImage}
        resizeMode="contain" // Optional: 'cover', 'contain', 'stretch', 'repeat', 'center'
      ></FastImage>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 120,
    // marginVertical:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 5,
  },
  backgroundImage: {
    width: '75%',
    height: 90,
  },
});

export default TradeMark;
