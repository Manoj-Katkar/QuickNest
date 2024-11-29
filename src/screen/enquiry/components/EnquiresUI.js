import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PanicEnquiryIcon from '../../../../assets/icons/PanicEnquiryIcon';
import ConcernEnquiryIcon from '../../../../assets/icons/ConcernEnquiryIcon';
import SearchFilter from './SearchFilter';
import ConcernCards from './ConcernCards';
import PanicCards from './PanicCards';

const EnquiresUI = ({navigation}) => {
  // State to track which cards to render (default: 'concern')
  const [emotionalResponse, setEmotionalResponse] = useState('concern');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainHeaderContainer}>
          <Text style={styles.text1}>Enquires</Text>

          <View style={styles.headerOptions}>
            {/* Panic Button */}
            <TouchableOpacity
              style={[
                styles.button,
                emotionalResponse === 'panic'
                  ? styles.activeButton
                  : styles.inactiveButton,
              ]}
              onPress={() => setEmotionalResponse('panic')}>
              <View style={styles.btnView}>
                <PanicEnquiryIcon width={20} height={20} style={styles.icon} />
                <Text
                  style={[
                    styles.text2,
                    emotionalResponse === 'panic' && styles.activeText,
                  ]}>
                  Panic
                </Text>
              </View>
            </TouchableOpacity>

            {/* Concerns Button */}
            <TouchableOpacity
              style={[
                styles.button,
                emotionalResponse === 'concern'
                  ? styles.activeButton
                  : styles.inactiveButton,
              ]}
              onPress={() => setEmotionalResponse('concern')}>
              <View style={styles.btnView}>
                <ConcernEnquiryIcon
                  width={20}
                  height={20}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.text3,
                    emotionalResponse === 'concern' && styles.activeText,
                  ]}>
                  Concerns
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Render the Search and Filter UI */}
      <SearchFilter />

      {/* Conditional Rendering Based on emotionalResponse */}
      {emotionalResponse === 'concern' ? (
        <ConcernCards navigation={navigation} />
      ) : (
        <PanicCards navigation={navigation} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  mainHeaderContainer: {
    width: '90%',
    marginTop: 15,
    marginBottom: 15,
    alignSelf: 'center',
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
  activeText: {
    fontWeight: 'bold',
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
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  activeButton: {
    backgroundColor: 'white', // Active button background
  },
  inactiveButton: {
    backgroundColor: '#ebecf0', // Inactive button background
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontWeight: '700',
  },
});

export default EnquiresUI;
