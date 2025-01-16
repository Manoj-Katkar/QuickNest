import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {Image} from '../../constant/images';
import CustomHeader from '../../components/header-comp';
import MapIcon from '../../../assets/icons/MapIcon';

const MapIntegration = ({navigation}: any) => {
  return (
    <>
      <ImageBackground
        source={Image.mapImage} // Replace with your image URL or local path
        style={styles.backgroundImage}
        resizeMode="stretch" // Optional: 'cover', 'contain', 'stretch', 'repeat', 'center'
      >
        <CustomHeader navigation={navigation} />
        <MapIcon style={styles.mapIcon} />
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
    // marginTop: 30,
  },
  mapIcon: {position: 'absolute', top: 495, left: 185},
});

export default MapIntegration;
