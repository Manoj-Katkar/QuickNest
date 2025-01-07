//Main Home screen from where user can re-direct to the multiple screens
import {View, StatusBar, FlatList, Alert} from 'react-native';
import React, {useCallback, useContext, useEffect} from 'react';
import Header from './components/Header';
import TakeSpace from '../../components/take-space';
import {
  CommingSoon,
  Contacts,
  GetInTouch,
  Protect,
  QuickGuide,
  SafeTip,
  TradeMark,
  Verification,
} from './components';
import i18n from '../../../i18n';
import UserContext from '../../contextApi/userContext';
import ActivateSubscription from './components/ActivateSubscription';

const Home = ({navigation}: any) => {
  // !step 3 consuming the context using the inbuilt hook useContext()
  let {data, setData} = useContext(UserContext);

  // update the language here also using the useEffect
  useEffect(() => {
    checkLanguage();
  }, []);

  const checkLanguage = async () => {
    // const selectedLanguage = await AsyncStorage.getItem('LanguageSelected');
    const selectedLanguage = data.languageSelectedByUser;

    if (selectedLanguage != null) {
      // means now it is holding the truthy value means already user have selected the one language
      //I have t oget the language in code
      const lng =
        selectedLanguage === 'English'
          ? 'en'
          : selectedLanguage === 'Hindi'
          ? 'hi'
          : data.languageSelectedByUser === 'English'
          ? 'en'
          : 'hi';
      i18n.changeLanguage(lng);

      //now here I have t also update the data from the userContext
      setData((prevData: any) => ({
        ...prevData,
        languageSelectedByUser: selectedLanguage, // language can be null
      }));
    }
  };

  const renderHome = useCallback(() => {
    return (
      <View>
        <Verification />
        <ActivateSubscription />
        <Contacts />
        <Protect />
        <SafeTip />
        <QuickGuide />
        <TakeSpace space={10} />
        <CommingSoon nav={navigation} />
        <GetInTouch />
        {/* Customizing the StatusBar */}

        <TakeSpace space={10} />
        {/* <TakeSpace space={10} />
        <RedirectNotification nav={navigation} />
        <TakeSpace space={50} /> */}
      </View>
    );
  }, []);

  return (
    <>
      <FlatList
        data={[1]}
        contentContainerStyle={{backgroundColor: '#fafafa', flexGrow: 1}}
        ListHeaderComponent={() => <Header nav={navigation} />}
        ListHeaderComponentStyle={{backgroundColor: '#fafafa'}}
        ListFooterComponent={() => <TradeMark />}
        ListFooterComponentStyle={{paddingBottom: 50}}
        renderItem={renderHome}
      />
    </>
  );
};

export default Home;
