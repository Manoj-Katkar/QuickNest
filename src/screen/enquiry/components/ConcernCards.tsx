import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import dataFromJson from '../../../../data.json';
import CalenderIcon from '../../../../assets/icons/CalenderIcon';
import RecordingIcon from '../../../../assets/icons/RecordingIcon';
import DrawerNextIcon from '../../../../assets/icons/DrawerNextIcon';
import {useTranslation} from 'react-i18next';
import UserContext from '../../../contextApi/userContext';

const ConcernCards = ({navigation}: any) => {
  const {t} = useTranslation(); // ^ this will do the traslation

  // !step 3 consuming the context using the inbuilt hook useContext()
  let {data, setData} = useContext(UserContext);

  const [language, setLanguage] = useState(data.languageSelectedByUser);

  console.log('language from concern cards : ', language);

  // I will take the one useEffect using the empty array dependency when the language will get updated in the usercontext
  // to get the updated language user previouslly selected form the context API
  useEffect(() => {
    const updatedLanguage = data.languageSelectedByUser;
    setLanguage(updatedLanguage);
  }, [data]);

  const handlePress = () => {
    navigation.navigate('Details');
  };

  const renderCards = useCallback(
    ({item}: any) => {
      {
        return (
          <View style={styles.subContainer1}>
            <View style={styles.sub1Child1}>
              <Text style={styles.text1}>{item.ticketNo}</Text>
              <Text style={styles.text2}>
                {language === 'English' ? (
                  <>{item.status}</>
                ) : (
                  <>{item.statusInHindi}</>
                )}
              </Text>
            </View>

            <View style={styles.sub1Child2}>
              <View style={styles.calenderView}>
                <CalenderIcon width={26} height={26} />
                <Text style={styles.text3}>
                  {language === 'English' ? (
                    <>{item.date}</>
                  ) : (
                    <>{item.dateInHindi}</>
                  )}
                </Text>
              </View>

              <Text style={styles.text4}>
                {language === 'English' ? (
                  <>{item.contentOfCard}</>
                ) : (
                  <>{item.contentOfCardInHindi}</>
                )}
              </Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.sub1Child3}>
              <TouchableOpacity style={styles.btn1}>
                <View style={styles.child3View}>
                  <RecordingIcon width={26} height={26} />
                  <Text style={styles.text5}>{t('recordingBtnText')}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn2} onPress={handlePress}>
                <DrawerNextIcon width={26} height={26} />
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    },
    [language],
  );

  return (
    <View style={styles.container}>
      {/* <Text style={{color: 'black'}}>From Concerns Cards</Text> */}
      <FlatList
        data={dataFromJson.ticketArrayConcern}
        keyExtractor={(item, index) => index.toString()} // used to extract a unique key for each item in the list.
        renderItem={renderCards}
        contentContainerStyle={{paddingBottom: 50}} // Add padding to the bottom of the list
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  text1: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Mulish-SemiBold',
    backgroundColor: '#ebebeb',
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 20,
  },
  text2: {
    color: '#5fba86',
    fontSize: 12,
    fontFamily: 'Mulish-SemiBold',
    backgroundColor: '#ecf2f0',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  text3: {
    color: '#2a2a2a',
    fontSize: 14,
    paddingLeft: 10,
    fontFamily: 'Mulish-Medium',
  },
  text4: {
    color: 'black',
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Mulish-Regular',
    lineHeight: 20,
  },
  text5: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Mulish-Bold',
    paddingLeft: 6,
    marginTop: 3,
  },
  subContainer1: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  sub1Child1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 5,
  },
  sub1Child2: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  sub1Child3: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  child3View: {
    flexDirection: 'row',
  },
  btn1: {
    backgroundColor: '#ebecf0',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 10,
    marginRight: 5,
  },
  btn2: {
    backgroundColor: '#011e62',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
  },
  calenderView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default React.memo(ConcernCards);
