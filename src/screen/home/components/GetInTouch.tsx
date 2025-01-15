import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import HeadPhone from '../../../../assets/icons/HeadPhone';
import customNavigation from '../../../hook/navigationCustomHook';

const GetInTouch = () => {
  const {navigateTo} = customNavigation();

  const navigateToContactUsScreen = () => {
    navigateTo('DrawerNav', {
      screen: 'ContactUs',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get in touch with us</Text>

      <View style={styles.subContainer}>
        <View style={styles.subContainerPart1}>
          <Text style={styles.text1}>Contact us</Text>
          <Text style={styles.text2}>
            Tap the button to {'\n'} access or support {'\n'} options
          </Text>
        </View>

        <View style={styles.subContainerPart2}>
          <HeadPhone width={55} height={55} style={styles.headPhone} />
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToContactUsScreen}>
            <Text style={styles.text3}>Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  subContainerPart1: {},
  subContainerPart2: {},
  text: {
    paddingLeft: 22,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Mulish-Bold',
    marginBottom: 10,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    color: 'black',
    marginBottom: 10,
  },
  text2: {
    fontSize: 17,
    fontFamily: 'Mulish-Regular',
    color: 'black',
    marginBottom: 10,
  },
  text3: {
    color: '#212f5a',
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
  },
  button: {
    backgroundColor: '#fafafa',
    paddingTop: 10,
    paddingRight: 35,
    paddingBottom: 10,
    paddingLeft: 40,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#212f5a',
    alignSelf: 'flex-end',
    marginTop: 40,
  },
  headPhone: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // backgroundColor: 'yellow',
  },
});

export default GetInTouch;
