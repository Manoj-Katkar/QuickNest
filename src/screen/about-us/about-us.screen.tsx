import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {Image} from '../../constant/images';
import CustomHeader from '../../components/header-comp';

const AboutUs = ({navigation}: any) => {
  return (
    <>
      <ImageBackground
        source={Image.aboutUsScreenBackground} // Replace with your image URL or local path
        style={styles.backgroundImage}
        resizeMode="stretch" // Optional: 'cover', 'contain', 'stretch', 'repeat', 'center'
      >
        <CustomHeader headerText="About us" navigation={navigation} />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center', // Align content horizontally
    // paddingTop: 10,
  },
});

export default AboutUs;
