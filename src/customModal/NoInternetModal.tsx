import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Image} from '../constant/images';
import {screenWidth} from '../responsive';

const {height} = Dimensions.get('screen');

const NoInternetModal = ({visible, onClose}: any) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <FastImage
              source={Image.NoInternetImage}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.image}
            />

            <Text style={styles.sucessText}>Network disconnected</Text>
            <Text style={styles.sucessPara}>
              Your Wi-Fi is disconnected. Please check {'\n'}your connection or
              try reconnecting.
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: screenWidth * 0.8,
    height: 200,
    alignSelf: 'center',
  },
  sucessText: {
    color: '#2B2B2B',
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  sucessPara: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default NoInternetModal;
