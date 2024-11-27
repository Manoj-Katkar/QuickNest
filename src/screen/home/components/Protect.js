import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../../constant/images';

const {width, height} = Dimensions.get('window');

const Protect = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Here to protect, Here to serve</Text>
      </View>

      <View style={styles.imageContainer}>
        {/* Here I have to render the image */}
        <FastImage
          source={Image.protectImage}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain} // or cover, depending on your needs
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"aqua",
    marginTop: 25,
  },
  text1: {
    marginTop: 10,
    marginBottom: 19,
    paddingLeft: 20,

    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    // fontWeight:"600",
    color: 'black',
  },
  imageContainer: {
    flex: 1,
    marginBottom: 14,
    // backgroundColor: 'yellow',
    // padding:10
  },
  image: {
    width: '95%',
    height: 225,
    alignSelf: 'center',
    backgroundColor: '#f0f4f7',
    borderRadius: 15,
  },
});

export default Protect;
