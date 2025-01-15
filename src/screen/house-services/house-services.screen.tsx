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
import RightIcon from '../../../assets/icons/RightIcon';
import {screenWidth} from '../../responsive';
import CustomHeader from '../../components/header-comp';

const dataArray = [
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
];

// Define prop types using FC
interface RenderServiceFeatureProps {
  heading: string;
  para: string;
}

//^ Component I have to write the outside
const RenderServiceFeature: React.FC<RenderServiceFeatureProps> = ({
  heading,
  para,
}) => {
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

const HouseServices = ({navigation}: any) => {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CustomHeader headerText="House Services" navigation={navigation} />

      <View style={styles.mainContainer}>
        <FastImage
          source={Image.houseBanner}
          resizeMode={FastImage.resizeMode.cover} //^compulsory I have to give
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
          data={dataArray}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RenderServiceFeature heading={item.heading} para={item.para} />
          )}
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
    width: screenWidth * 0.99,
    height: 230,
    alignSelf: 'center',
  },
  mainContainer: {},
  individualContainer: {
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 13,
    marginLeft: 10,
  },
  subContainer1: {
    paddingTop: 4,
  },
  subContainer2: {
    marginLeft: 10,
  },
  containerHeading: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Mulish-SemiBold',
    marginBottom: 10,
  },
  containerPara: {
    color: '#373737',
    fontSize: 14,
    fontFamily: 'Mulish-Medium',
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
    width: '89%',
    backgroundColor: '#011e62',
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#011e62',
    marginBottom: 15,
  },
  textContainer: {
    width: '90%',
    alignSelf: 'center',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default HouseServices;
