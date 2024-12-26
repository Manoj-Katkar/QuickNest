import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchIcon from '../../../../assets/icons/SearchIcon';
import FilterIcon from '../../../../assets/icons/FilterIcon';
import {useTranslation} from 'react-i18next';

const SearchFilter = () => {
  const [searchText, setSearchText] = useState('');
  const {t} = useTranslation(); // ^ this will do the traslation

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>SearchFilter</Text> */}

      <View style={styles.subContainer1}>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <SearchIcon width={24} height={24} style={styles.searchIcon} />
          </TouchableOpacity>

          <TextInput
            style={[styles.searchInput, {fontSize: 16}]}
            placeholder={t('searchPlaceHolderText')}
            placeholderTextColor="#8f8f8f"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
      </View>

      <View style={styles.subContainer2}>
        <View style={styles.subContainer2Btn1}>
          <View style={styles.btn1View}>
            <FilterIcon width={16} height={16} style={styles.btn1Icon} />
            <Text style={styles.text1}>{t('filterMessage')}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.subContainer2Btn2}>
          <Text style={styles.text2}>{t('progressText')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subContainer2Btn3}>
          <Text style={styles.text3}>{t('resolvedText')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 1,
  },
  subContainer1: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  subContainer2: {
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    paddingLeft: 10,
  },
  searchIcon: {
    marginLeft: 5,
  },
  subContainer2Btn1: {
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  subContainer2Btn2: {
    backgroundColor: 'white',
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginLeft: 5,
    marginTop: 7,
  },
  subContainer2Btn3: {
    backgroundColor: 'white',
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginLeft: 5,
    marginTop: 7,
  },
  text1: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Mulish-Medium',
  },
  text2: {
    color: '#03195a',
    fontSize: 14,
    fontFamily: 'Mulish-Medium',
  },
  text3: {
    color: '#03195a',
    fontSize: 14,
    fontFamily: 'Mulish-Medium',
  },
  btn1View: {
    flexDirection: 'row',
  },
  btn1Icon: {
    marginRight: 5,
  },
});

export default SearchFilter;
