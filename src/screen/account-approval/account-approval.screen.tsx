import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenWidth} from '../../responsive';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';

const AccountApproval = ({navigation}: any) => {
  const navigateBackHandle = () => {
    navigation?.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <FastImage
          source={Image.ApprovalPendingImage}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.image}
        />
      </View>

      <View style={styles.approvalPendingContainer}>
        <Text style={styles.approvalText}>Approval pending</Text>
        <Text style={styles.approvalTextPara}>
          Your verification approval has been sent to admin. You will be
          notified once the verification is complete.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={navigateBackHandle}>
          <Text style={styles.btnText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 30,
    rowGap: 20,
  },
  imageContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  image: {
    width: screenWidth * 0.99,
    height: screenWidth * 0.87,
    marginTop: 110,
  },
  approvalPendingContainer: {
    width: '89%',
    // backgroundColor: 'yellow',
    rowGap: 10,
    marginBottom: 20,
    // paddingBottom: 20,
    alignSelf: 'center',
  },
  approvalText: {
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    color: '#2B2B2B',
    textAlign: 'left',
    marginBottom: 10,
  },
  approvalTextPara: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2BBF',
    textAlign: 'left',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  btn: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#011e62',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  btnText: {
    color: '#001E61',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
  },
});

export default AccountApproval;
