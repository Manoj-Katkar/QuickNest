import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PanicEnquiryIcon from '../../../../assets/icons/PanicEnquiryIcon';
import ConcernEnquiryIcon from '../../../../assets/icons/ConcernEnquiryIcon';

const EnquiresHeader = () => {
  const [activeButton, setActiveButton] = useState(null); // State to track active button

  return (
    <View style={styles.container}>
      <View style={styles.mainHeaderContainer}>
        <Text style={styles.text1}>Enquires</Text>

        <View style={styles.headerOptions}>
          {/* Panic Button */}
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === 'panic'
                ? styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={() => setActiveButton('panic')}>
            <View style={styles.btnView}>
              <PanicEnquiryIcon width={20} height={20} style={styles.icon} />
              <Text style={styles.text2}>Panic</Text>
            </View>
          </TouchableOpacity>

          {/* Concerns Button */}
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === 'concerns'
                ? styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={() => setActiveButton('concerns')}>
            <View style={styles.btnView}>
              <ConcernEnquiryIcon width={20} height={20} style={styles.icon} />
              <Text style={styles.text3}>Concerns</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'red',
  },
  mainHeaderContainer: {
    width: '90%',
    marginTop: 15,
    marginBottom: 15,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  text1: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
  },
  text2: {
    color: '#5b5c60',
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    paddingLeft: 5,
  },
  text3: {
    color: '#03195a',
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    paddingLeft: 5,
  },
  headerOptions: {
    width: '100%',
    backgroundColor: '#ebecf0',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    // backgroundColor: 'red',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  activeButton: {
    backgroundColor: 'white', // Active state background
  },
  inactiveButton: {
    backgroundColor: '#ebecf0', // Inactive state background
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  icon: {
    fontWeight: '700',
  },
});

export default EnquiresHeader;
