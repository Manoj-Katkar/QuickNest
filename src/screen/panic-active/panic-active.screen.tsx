import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import {screenWidth} from '../../responsive';

const PanicActive = ({navigation}: any) => {
  const handleToMapIntegrationScreen = () => {
    navigation.navigate('MapIntegration');
  };
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.toTakeLocation}></View>
        <View style={styles.emergencyTextContainer}>
          <Text style={styles.needHelpText}>Hang in there!</Text>
          <Text style={styles.pressBtnText}>Help will be there shortly!</Text>
        </View>
        <View style={styles.imageParent}>
          <TouchableOpacity onPress={handleToMapIntegrationScreen}>
            <FastImage
              source={Image.PanicActiveImage}
              resizeMode={FastImage.resizeMode.contain} //^compulsory I have to give
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.callRecordingContainer}>
          <Text style={styles.pressBtnText}>
            Call recording has been started. Quickly {'\n'}brief us what’s the
            issue!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3e3f',
    paddingTop: 40,
  },
  parent: {
    width: '92%',
    alignSelf: 'center',
    // backgroundColor: '#ff3e3f',
  },
  toTakeLocation: {},
  emergencyTextContainer: {
    marginTop: 170,
  },
  needHelpText: {
    fontSize: 28,
    fontFamily: 'Mulish-SemiBold',
    color: '#F5F5F5BF',
    textAlign: 'center',
    marginBottom: 10,
  },
  pressBtnText: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#F5F5F5BF',
    textAlign: 'center',
  },
  imageParent: {
    // width: '100%',
    // height: 500,
  },
  image: {
    width: screenWidth * 0.99,
    height: 380,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  callRecordingContainer: {},
});

export default PanicActive;
