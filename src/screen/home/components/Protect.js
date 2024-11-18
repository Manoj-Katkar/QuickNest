import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../../constant/images';

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
    // flex:1,
    // backgroundColor:"aqua",
    marginTop: 25,
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 25,
    color: 'black',
  },
  imageContainer: {
    marginBottom: 14,
    // backgroundColor: 'yellow',
  },
  image: {
    width: 500,
    height: 100,
    alignSelf: 'center',
  },
});

export default Protect;
