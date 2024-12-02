import {View, Text} from 'react-native';
import React from 'react';

const ServiceFeature = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  individualContainer: {
    // backgroundColor:"yellow",
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 13,
    marginLeft: 10,
    marginTop: 100,
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
});

export default ServiceFeature;
