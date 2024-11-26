import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import HouseServicesImage from '../../../../assets/icons/HouseServicesImage';
import FastImage from 'react-native-fast-image';
import {Image} from '../../../constant/images';

const {width, height} = Dimensions.get('window');

const CommingSoon = ({nav}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comming Soon!</Text>

      <TouchableOpacity onPress={() => nav.navigate('House_Services')}>
        {/* <HouseServicesImage width={400} height={200}/> */}

        <FastImage
          source={Image.houseBanner}
          // resizeMode='contain'

          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    // backgroundColor:"aqua",
    // marginBottom:300,
  },
  text: {
    paddingLeft: 22,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Mulish-Bold',
    // fontWeight:"600"
  },
  image: {
    // backgroundColor:"red",
    width: width * 0.91,
    height: 230,
    alignSelf: 'center',
    marginTop: 5,
    // marginBottom:5,
  },
});

export default CommingSoon;
