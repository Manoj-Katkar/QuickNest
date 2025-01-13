import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import CustomHeader from '../../components/header-comp';
import PrivacyIcon from '../../../assets/icons/PrivacyIcon';
import NextBlueIcon from '../../../assets/icons/NextBlueIcon';

const legalDocumentsArray = [
  {
    id: 1,
    legalDocumentType: 'Privacy policy',
    redirectScreenName: 'PrivacyPolicy',
  },
  {
    id: 2,
    legalDocumentType: 'Terms & Conditions',
    redirectScreenName: 'TermsConditions',
  },
];

const LegalDocuments = ({navigation}: any) => {
  const [documentTypeArray, setDocumentTypeArray] =
    useState(legalDocumentsArray);

  const navigateToParticularScreen = (redirectScreenName: string) => {
    navigation.navigate(`${redirectScreenName}`);
  };

  const renderEachDocumentType = useCallback(
    ({item}: {item: any}) => {
      return (
        <>
          <TouchableOpacity
            onPress={() => {
              console.log('privacy policy is pressed');
              navigateToParticularScreen(item.redirectScreenName);
            }}>
            <View style={styles.mainParent}>
              <View style={styles.child1}>
                <PrivacyIcon width={22} height={22} />
                <Text style={styles.child1Text}>{item.legalDocumentType}</Text>
              </View>

              <View style={styles.child2}>
                <NextBlueIcon style={styles.nextIcon} width={18} height={18} />
              </View>
            </View>
          </TouchableOpacity>
        </>
      );
    },
    [documentTypeArray],
  );

  return (
    <View style={styles.container}>
      <CustomHeader headerText="Legal Documents" navigation={navigation} />

      <FlatList
        data={documentTypeArray}
        renderItem={renderEachDocumentType}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => (
          //^ prefer this when I do not want to apply the particular like line to the last item in the FlatList
          <View style={styles.horizontalLine}></View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  mainParent: {
    width: '89%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    // backgroundColor: 'aqua',
    paddingVertical: 10,
  },
  child1: {
    width: '80%',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
  },
  child1Text: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    color: '#2B2B2B',
    marginLeft: 15,
  },
  child2: {
    width: '15%',
    // backgroundColor: 'yellow',
  },

  nextIcon: {
    alignSelf: 'flex-end',
  },
  horizontalLine: {
    width: '89%',
    height: 1.5,
    backgroundColor: '#2B2B2B1A',
    // width: '100%',
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default LegalDocuments;
