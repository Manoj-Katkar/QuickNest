import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import PanicEnquiryIcon from '../../../../assets/icons/PanicEnquiryIcon';
import ConcernEnquiryIcon from '../../../../assets/icons/ConcernEnquiryIcon';
import SearchFilter from './SearchFilter';
import {helpers} from '../../../utility/helpers';
import {useTranslation} from 'react-i18next';

const ConcernCards = helpers.LazyLoad(() => import('./ConcernCards'));
const PanicCards = helpers.LazyLoad(() => import('./PanicCards'));

const EnquiresUI = ({navigation}: any) => {
  const [emotionalResponse, setEmotionalResponse] = useState('concern');
  const {t} = useTranslation(); // ^    this will do the traslation

  const handlePress = (response: string) => {
    setEmotionalResponse(response);
  };

  const cards = useCallback(() => {
    switch (emotionalResponse) {
      case 'concern':
        return <ConcernCards navigation={navigation} />;

      case 'panic':
        return <PanicCards navigation={navigation} />;

      default:
        return null;
    }
  }, [emotionalResponse]);

  //^ using the useMemo hook to memeoize the styling
  const buttonStyle = useMemo(
    () => ({
      panic: [
        styles.button,
        emotionalResponse === 'panic'
          ? styles.activeButton
          : styles.inactiveButton,
      ],
      concern: [
        styles.button,
        emotionalResponse === 'concern'
          ? styles.activeButton
          : styles.inactiveButton,
      ],
    }),
    [emotionalResponse],
  );

  const textStyle = useMemo(
    () => ({
      panic: [styles.text2, emotionalResponse === 'panic' && styles.activeText],
      concern: [
        styles.text3,
        emotionalResponse === 'concern' && styles.activeText,
      ],
    }),
    [emotionalResponse],
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainHeaderContainer}>
          <Text style={styles.text1}>{t('enquiryHeading')}</Text>

          <View style={styles.headerOptions}>
            {/* Panic Button */}
            <Pressable
              style={buttonStyle.panic}
              onPress={() => handlePress('panic')}>
              <View style={styles.btnView}>
                <PanicEnquiryIcon width={20} height={20} style={styles.icon} />
                <Text style={textStyle.panic}>{t('panicText')}</Text>
              </View>
            </Pressable>

            {/* Concerns Button */}
            <Pressable
              style={buttonStyle.concern}
              onPress={() => handlePress('concern')}>
              <View style={styles.btnView}>
                <ConcernEnquiryIcon
                  width={20}
                  height={20}
                  style={styles.icon}
                />
                <Text style={textStyle.concern}>{t('concernText')}</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      {/* Render the Search and Filter UI */}
      <SearchFilter />
      {/* Conditional Rendering Based on emotionalResponse */}
      {cards()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 30,
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
    // backgroundColor: 'red',
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
