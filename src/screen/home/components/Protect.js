import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../../constant/images';



const {width , height} = Dimensions.get("window");


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
          resizeMode={FastImage.resizeMode.stretch} // or cover, depending on your needs
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    // backgroundColor:"aqua",
    marginTop: 25,
  },
  text1: {
    fontSize:25,
    fontWeight:"800",
    color:"black",
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 25,
  },
  imageContainer: {
    flex:1,
    marginBottom: 14,
    // backgroundColor: 'yellow',
  },
  image: {
    width:"100%",
    height:220,
    alignSelf:"center",

  },
});

export default Protect;
