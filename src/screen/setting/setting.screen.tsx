import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import PreviousIcon from '../../../assets/icons/PreviousIcon';
import DrawerNextIcon from '../../../assets/icons/DrawerNextIcon';
import i18n from '../../../i18n';
import {useTranslation} from 'react-i18next';
import UserContext from '../../contextApi/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState('English');
  const {t} = useTranslation(); // ^ this will do the traslation

  // !step 3 consuming the context using the inbuilt hook useContext()
  const {data, setData} = useContext(UserContext);

  // update the language here also using the useEffect
  useEffect(() => {
    checkLanguage();
  }, []);

  const checkLanguage = () => {
    const selectedLanguage = data.languageSelectedByUser; //fetching the selected language from the userContext

    if (selectedLanguage != null) {
      setLanguage(selectedLanguage);
    }
  };

  const handleLanguageChange = async (language: any) => {
    // Handle localization logic here
    console.log(`Language changed to: ${language}`);

    console.log('data from the context api = ', data);

    // !Here I have to update the userContext
    setData((prevData: any) => ({
      ...prevData,
      languageSelectedByUser: language, // language can be null
    }));

    //& updating the state
    setLanguage(language);

    // ^and here I have to also upgrade the language through the i18

    const lng =
      language === 'English'
        ? 'en'
        : language === 'Hindi'
        ? 'hi'
        : data.languageSelectedByUser === 'English'
        ? 'en'
        : 'hi';
    await AsyncStorage.setItem('LanguageSelected', language); //updating in the local storage
    i18n.changeLanguage(lng);

    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <PreviousIcon width={30} height={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('settingHeaderText')}</Text>
      </View>

      {/* Settings Content */}
      <View style={styles.settingContainer}>
        <View style={styles.settingChild1}>
          <Text style={styles.languageText}>{t('switchLangText')}</Text>
        </View>

        <View style={styles.settingChild2}>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => setModalVisible(true)}>
            <DrawerNextIcon width={26} height={26} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Language Modal */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Select Language</Text>

          <TouchableOpacity
            style={[styles.modalButton, styles.englishButton]}
            onPress={() => handleLanguageChange('English')}>
            <Text style={styles.modalButtonText}>English</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalButton, styles.hindiButton]}
            onPress={() => handleLanguageChange('Hindi')}>
            <Text style={styles.modalButtonText}>Hindi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalButton, styles.closeButton]}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F6F3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  backText: {
    fontSize: 18,
    color: '#FFF',
    marginRight: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 20,
  },
  changeLanguageButton: {
    backgroundColor: '#1ABC9C',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  modalView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  modalButton: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    backgroundColor: '#007BFF',
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  englishButton: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  hindiButton: {
    backgroundColor: '#FF5722',
    borderColor: '#FF5722',
  },
  closeButton: {
    backgroundColor: '#f44336',
    borderColor: '#f44336',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
  },
  nextIcon: {
    alignSelf: 'flex-end',
    color: 'white',
    // paddingLeft:10
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
  },
  settingChild1: {
    justifyContent: 'center',
  },
  settingChild2: {
    // backgroundColor: 'aqua',
    justifyContent: 'center',
  },
  languageText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  btn2: {
    backgroundColor: '#011e62',
    padding: 10,
    borderRadius: 50,
  },
});

export default Setting;
