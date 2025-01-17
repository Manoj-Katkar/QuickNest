import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import VerificationIcon from '../../../../assets/icons/VerificationIcon';
import NextIcon from '../../../../assets/icons/NextIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerNavScreens} from '../../../components/drawer-nav';
import {RootStackParamList} from '../../../../App';
import customNavigation from '../../../hook/navigationCustomHook';

const Verification = () => {
  const {navigateTo} = customNavigation();

  const navigateToVerificationScreen = () => {
    navigateTo('DrawerNav', {
      screen: 'Verification',
    });
  };
  return (
    <View style={styles.superParent}>
      <View style={styles.container}>
        <View style={styles.subContainer1}>
          <View style={styles.subContainer1_icon}>
            <VerificationIcon
              width={30}
              height={30}
              style={styles.actual_icon}
            />
          </View>

          <View>
            <Text style={styles.text1}>Complete Verification</Text>
            <Text style={styles.text2}>Your verification progress</Text>
          </View>
        </View>

        <View style={styles.subContainer2}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={navigateToVerificationScreen}>
            <NextIcon width={32} height={32} style={styles.nextIcon} />
          </TouchableOpacity>

          <Text style={styles.percentage}>50%</Text>
        </View>
      </View>

      <View style={styles.progressBar}>
        <View style={styles.horizontalLine1} />
        <View style={styles.horizontalLine2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  superParent: {
    width: '92%',
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 20,
    paddingRight: 15,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  container: {
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer1: {
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  subContainer2: {
    width: '20%',
    alignItems: 'flex-end',
    position: 'relative',
  },
  subContainer1_icon: {
    marginRight: 10,
  },
  actual_icon: {
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 20,
    paddingBottom: 10,
    fontFamily: 'Mulish-Bold',
    color: 'black',
  },
  text2: {
    fontSize: 15,
    fontFamily: 'Mulish-Regular',
    color: 'black',
    lineHeight: 15.06,
  },
  nextIcon: {
    position: 'absolute',
    top: -15,
    left: 15,
  },
  percentage: {
    fontSize: 18,
    marginRight: 10,
    fontFamily: 'Mulish-SemiBold',
    color: 'black',
    position: 'absolute',
    top: 40,
    left: 44,
  },
  progressBar: {
    flexDirection: 'row',
    width: '89%',
    height: 10,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 10,
  },
  horizontalLine1: {
    width: '55%',
    height: 5,
    backgroundColor: '#3db176',
    marginVertical: 5,
    alignSelf: 'center',
    borderRadius: 10,
  },
  horizontalLine2: {
    width: '35%',
    height: 5,
    backgroundColor: '#c5e8df',
    marginVertical: 5,
    alignSelf: 'center',
  },
  btn1: {
    width: '50%',
    height: 20,
  },
});

export default Verification;
