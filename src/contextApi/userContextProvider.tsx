import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserContext from './userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import i18n from '../../i18n';

// Define the type for the state
type UserData = {
  languageSelectedByUser: string | null;
};

const userContextProvider = (props: any) => {
  // !step 2 providing the context
  /**
   * *here props re-present the all the childrens UserContextProvider in the object having the array which re-present the hoe many childrens are there
   * *inside UserContextProvider global kind of  state
   */

  // console.log('props from User Context Provider');
  // console.log(props);

  //^lets creating the one state
  const [data, setData] = useState<UserData>({
    languageSelectedByUser: 'English',
  });

  console.log(
    'language updated from the userContext :',
    data.languageSelectedByUser,
  );

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        // Get the user's default language from device
        const deviceLanguageArray = RNLocalize.getLocales(); // ^Get device language according to the region
        console.log('Device language details:', deviceLanguageArray);
        const {languageCode} = deviceLanguageArray[0]; // Extract language code

        console.log(
          'default-device language details : ',
          deviceLanguageArray[0],
        );

        // Set the default language based on the device language
        let defaultLanguage = languageCode === 'en' ? 'English' : 'Hindi';

        //^ if user selected the language means user have used the app before also
        const storedLanguage = await AsyncStorage.getItem('LanguageSelected');

        const languageToUse = defaultLanguage || storedLanguage; //here first I am giving the preferance to the language stored in the localstorage

        console.log('language to use : ', languageToUse);

        const lng =
          languageToUse === 'English'
            ? 'en'
            : languageToUse === 'Hindi'
            ? 'hi'
            : data.languageSelectedByUser === 'English'
            ? 'en'
            : 'hi';

        i18n.changeLanguage(lng);

        setData(prevData => ({
          ...prevData,
          languageSelectedByUser: languageToUse, // Updatit state if the storedlanguage is true then that will be displayed
        }));
      } catch (error) {
        console.error('Error fetching language from AsyncStorage:', error);
      }
    };

    fetchLanguage();
  }, []);

  return (
    <UserContext.Provider value={{data, setData}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default userContextProvider;
