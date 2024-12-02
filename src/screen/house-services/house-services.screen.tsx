import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
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
    navigation.goBack();
  };

  const RenderServiceFeature = ({heading, para}) => {
    return (
      <View style={styles.individualContainer}>
        <View style={styles.subContainer1}>
          <RightIcon width={20} height={20} />
        </View>

        <View style={styles.subContainer2}>
          <Text style={styles.containerHeading}>{heading}</Text>
          <Text style={styles.containerPara}>{para}</Text>
        </View>
      </View>
    );
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

        {/* Now I am rendering the service features  */}

        <FlatList
          data={[
            {
              id: '1',
              heading: 'Routine Maintenance',
              para: `Regular inspections and upkeep of essential home \nsystems,including HVAC, plumbing, and electrical.`,
            },
            {
              id: '2',
              heading: 'Emergency Repairs',
              para: `Quick response and repair services for unexpected \nhome issues, available 24/7.`,
            },
            {
              id: '3',
              heading: 'Safety Checks',
              para: `Regular safety audits of your home to identify and \nmitigate potential hazards.`,
            },
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <>
                <RenderServiceFeature heading={item.heading} para={item.para} />
              </>
            );
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Book service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flexDirection: 'column',
    // alignSelf: 'flex-end',
    width: '89%',
    backgroundColor: '#011e62',
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#011e62',
    marginBottom: 15,
    // marginTop: 75,
    // backgroundColor: 'aqua',
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
  buttonContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default HouseServices;
