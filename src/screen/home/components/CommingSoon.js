import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../../constant/images';

const {width, height} = Dimensions.get('window');

const CommingSoon = ({nav}) => {
  return (
    <View>
      <Text style={styles.text}>Coming Soon!</Text>

      <TouchableOpacity
        style={{
          width: width,
          // paddingHorizontal: 16,
          alignSelf: 'center',
        }}
        onPress={() => nav.navigate('House_Services')}>
        <FastImage
          source={Image.houseBanner}
          resizeMode="contain"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingLeft: 22,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Mulish-Bold',
  },
  image: {
    width: '100%',
    height: height * 0.3,
  },
});

export default CommingSoon;
