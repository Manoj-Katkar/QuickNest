import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import CustomHeader from '../../components/header-comp';
import {log} from '@react-native-firebase/crashlytics';

const transactionsData = [
  {
    id: 1,
    subscriptionType: 'Monthly Subscription',
    dateOfPurchase: '1st Jan 2024',
    priceGiven: '£12',
  },
  {
    id: 2,
    subscriptionType: 'Quarterly Subscription',
    dateOfPurchase: '1st Feb 2024',
    priceGiven: '£30',
  },
  {
    id: 3,
    subscriptionType: 'Semi-Annual Subscription',
    dateOfPurchase: '1st Mar 2024',
    priceGiven: '£50',
  },
  {
    id: 4,
    subscriptionType: 'Annual Subscription',
    dateOfPurchase: '1st Apr 2024',
    priceGiven: '£90',
  },
  {
    id: 5,
    subscriptionType: 'Monthly Subscription',
    dateOfPurchase: '1st May 2024',
    priceGiven: '£12',
  },
  {
    id: 6,
    subscriptionType: 'Quarterly Subscription',
    dateOfPurchase: '1st Jun 2024',
    priceGiven: '£30',
  },
  {
    id: 7,
    subscriptionType: 'Semi-Annual Subscription',
    dateOfPurchase: '1st Jul 2024',
    priceGiven: '£50',
  },
  {
    id: 8,
    subscriptionType: 'Annual Subscription',
    dateOfPurchase: '1st Aug 2024',
    priceGiven: '£90',
  },
  {
    id: 9,
    subscriptionType: 'Monthly Subscription',
    dateOfPurchase: '1st Sep 2024',
    priceGiven: '£12',
  },
  {
    id: 10,
    subscriptionType: 'Quarterly Subscription',
    dateOfPurchase: '1st Oct 2024',
    priceGiven: '£30',
  },
];

const TransactionHistory = ({navigation}: any) => {
  const [transactionsDataArray, setTransactionsDataArray] =
    useState(transactionsData);

  const renderEachTransactionDetails = useCallback(
    ({item, index}: any) => {
      return (
        <>
          <View style={styles.MainParent}>
            <View style={styles.child1}>
              <Text style={styles.subscriptionText}>
                {item.subscriptionType}
              </Text>
              <Text style={styles.datePurchaseText}>{item.dateOfPurchase}</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.priceText}>{item.priceGiven}</Text>
            </View>
          </View>
        </>
      );
    },
    [transactionsData],
  );
  return (
    <View style={styles.container}>
      <CustomHeader headerText="Transaction" navigation={navigation} />

      <View style={styles.flatListParent}>
        <FlatList
          data={transactionsDataArray}
          inverted={false} //^used to invert the all the items of the flatlist
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={renderEachTransactionDetails}
          ItemSeparatorComponent={() => (
            //^ prefer this when I do not want to apply the particular like line to the last item in the FlatList
            <View style={styles.horizontalLine}></View>
          )}
        />
      </View>
      <View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  MainParent: {
    // backgroundColor: 'aqua',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 10,
  },
  child1: {
    width: '80%',
    // backgroundColor: 'yellow',
  },
  child2: {
    width: '10%',
    marginTop: 5,
    // backgroundColor: 'yellow',
  },
  subscriptionText: {
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    color: '#2B2B2B',
    marginTop: 10,
  },
  datePurchaseText: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2BBF',
    marginTop: 10,
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    color: '#2B2B2B',
  },
  flatListParent: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 100,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#2B2B2B1A',
    width: '100%',
    alignSelf: 'center',
    // marginTop: 20,
  },
  forUnderstandingLOgic: {
    fontSize: 10,
    color: 'red',
  },
});

export default TransactionHistory;
