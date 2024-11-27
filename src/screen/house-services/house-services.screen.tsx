import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import NextIcon from '../../../assets/icons/NextIcon';
import RightIcon from '../../../assets/icons/RightIcon';
import PreviousIcon from '../../../assets/icons/PreviousIcon';

const {width, height} = Dimensions.get('window');

const HouseServices = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Enquiry');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>House-Services</Text> */}

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress}>
          <PreviousIcon width={30} height={30} />
        </TouchableOpacity>

        <Text style={styles.headerText}>House Services</Text>
      </View>

      <View style={styles.mainContainer}>
        <FastImage
          source={Image.houseBanner}
          // resizeMode='cover'

          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.packageText}>
            Our Comprehensive Home Service Package {'\n'}ensures that your home
            is always in top shape.
          </Text>

          <Text style={styles.serviceText}>Service feature</Text>
        </View>

        {/* 1st  */}

        <View style={styles.individualContainer}>
          <View style={styles.subContainer1}>
            <RightIcon width={20} height={20} />
          </View>

          <View style={styles.subContainer2}>
            <Text style={styles.containerHeading}>Routine Maintenance </Text>
            <Text style={styles.containerPara}>
              Regular inspections and upkeep of essential home {'\n'}systems,
              including HVAC, plumbing, and electrical.
            </Text>
          </View>
        </View>

        {/* 2nd  */}

        <View style={styles.individualContainer}>
          <View style={styles.subContainer1}>
            <RightIcon width={20} height={20} />
          </View>

          <View style={styles.subContainer2}>
            <Text style={styles.containerHeading}>Emergency Repairs</Text>
            <Text style={styles.containerPara}>
              Quick response and repair services for unexpected {'\n'}home
              issues, available 24/7.
            </Text>
          </View>
        </View>

        {/* 3rd  */}

        <View style={styles.individualContainer}>
          <View style={styles.subContainer1}>
            <RightIcon width={20} height={20} />
          </View>

          <View style={styles.subContainer2}>
            <Text style={styles.containerHeading}>Safety Checks</Text>
            <Text style={styles.containerPara}>
              Regular safety audits of your home to identify and {'\n'}mitigate
              potential hazards.
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Book service</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fafafa', // Cool light greenish background
    // backgroundColor:"red",
    // justifyContent:"space-between",
    backgroundColor: '#fafafa',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E', // Cool dark greyish-blue text color
  },
  image: {
    // backgroundColor:"yellow",
    width: width * 0.99,
    height: 230,
    alignSelf: 'center',
  },
  mainContainer: {},
  individualContainer: {
    // backgroundColor:"yellow",
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 13,
    marginLeft: 10,
  },
  subContainer1: {
    // backgroundColor:"aqua"
  },
  subContainer2: {
    // backgroundColor:"pink",
    marginLeft: 10,
  },
  containerHeading: {
    color: 'black',
    fontSize: 17,
    // fontWeight:"500",
    fontFamily: 'Mulish-SemiBold',
    marginBottom: 10,
  },
  containerPara: {
    color: '#373737',
    fontSize: 14,
    fontFamily: 'Mulish-Medium',
    // lineHeight:15.06
    lineHeight: 19,
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
  },
  btn: {
    alignSelf: 'center',
    width: '89%',
    backgroundColor: '#011e62',
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#011e62',
    marginBottom: 15,
    marginTop: 65,
  },
  textContainer: {
    // backgroundColor:"aqua",
    width: '90%',
    alignSelf: 'center',
    // marginTop:15,
    marginBottom: 10,
  },
  packageText: {
    color: '#373737',
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    lineHeight: 24, // Set the line height here
    marginBottom: 15,
  },
  serviceText: {
    color: '#373737',
    fontSize: 18,
    fontFamily: 'Mulish-Regular',
    marginBottom: 15,
  },
  headerContainer: {
    // backgroundColor:"yellow",
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 14,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    marginLeft: 10,
  },
});

export default HouseServices;
