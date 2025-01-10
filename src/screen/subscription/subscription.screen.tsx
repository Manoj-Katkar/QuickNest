import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import PreviousIconWhite from '../../../assets/icons/PreviousIconWhite';
import RightIcon from '../../../assets/icons/RightIcon';
import {
  addEventListener,
  fetch,
  useNetInfo,
} from '@react-native-community/netinfo';

const dataArray = [
  {
    id: '1',
    heading: 'Emergency Dispatch Services',
    para: `Immediate response and dispatch of emergency \nservices when needed.`,
  },
  {
    id: '2',
    heading: 'Comprehensive Family Coverage',
    para: `Includes security services for the account holder’s\nhome and up to 3 additional family members at no\nextra cost.\nNote - £1.99 per month for each additional family \nmember beyond the included three. `,
  },
  {
    id: '3',
    heading: 'Panic Button Activation',
    para: `Quick access to a panic button for immediate help \nin emergencies.`,
  },
  {
    id: '4',
    heading: 'On Ground Patrol Team',
    para: `Mobile patrol team dedicated to your area, acting \nas a deterrent for crime.`,
  },
];

const subscriptionArray = [
  {
    id: 1,
    subscriptionType: 'Annual',
    price: '£ 89.99',
    perMonthPrice: '£ 7.50/ monthly',
  },
  {
    id: 2,
    subscriptionType: 'Monthly',
    price: '£ 7.99',
  },
];

type RenderServiceFeatureProps = {
  heading: string;
  para: string;
};

type subscriptionTypeProps = {
  id: number;
  subscriptionType: string;
  price: string;
  perMonthPrice: string;
};

const Subscription = ({navigation}: any) => {
  const {type, isConnected} = useNetInfo();
  const [paymentStatus, setPaymentStatus] = useState<boolean>(true); // true as default
  const [selectedSubscriptionInfo, setSelectedSubscriptionInfo] = useState<any>(
    {},
  );

  const handlePress = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    } else {
      console.log('Navigation object is not available');
    }
  };

  const renderEachItem = useCallback(
    ({item}: {item: RenderServiceFeatureProps}) => {
      return (
        <View style={styles.individualContainer}>
          <View style={styles.subContainer1}>
            <RightIcon width={20} height={20} />
          </View>

          <View style={styles.subContainer2}>
            <Text style={styles.containerHeading}>{item.heading}</Text>
            <Text style={styles.containerPara}>{item.para}</Text>
          </View>
        </View>
      );
    },
    [dataArray],
  );

  const renderSubscription = useCallback(
    ({item}: any) => {
      const isSelected = selectedSubscriptionInfo.id === item.id; // Check if this subscription is selected

      return (
        <TouchableOpacity
          style={[styles.selectSubscriptionBtn]}
          onPress={() => {
            setSelectedSubscriptionInfo(item); // Set the selected subscription info
          }}>
          <View
            style={[
              styles.MemberPrice,
              isSelected && {borderWidth: 2.5, borderColor: '#294090'},
            ]}>
            <View style={styles.child1}>
              <Text style={styles.child1Text}>{item.subscriptionType}</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.child2Text1}>{item.price}</Text>
              {item.perMonthPrice ? (
                <>
                  <Text style={styles.child2Text2}>{item.perMonthPrice}</Text>
                </>
              ) : (
                <Text style={styles.child2Text2}></Text>
              )}
            </View>
            {item.id === 1 ? (
              <Text style={styles.bestValueText}>Best value</Text>
            ) : null}
          </View>
        </TouchableOpacity>
      );
    },
    [subscriptionArray, selectedSubscriptionInfo], // Include selectedSubscriptionInfo in the dependencies
  );

  const navigateAccordingToPaymentStatus = () => {
    if (paymentStatus === true && isConnected === true) {
      // console.log('Navigating to PaymentSuccessful');
      console.log('Payment Status:', paymentStatus);
      console.log('Subscription Info:', selectedSubscriptionInfo);
      console.log('Connection Type:', type);
      console.log('Is Connected:', isConnected);
      navigation.navigate('PaymentSuccessful');
      //here also print the all the states details info
    } else if (paymentStatus === false) {
      // console.log('Navigating to PaymentUnsuccessful');
      navigation.navigate('PaymentUnsuccessful');
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#19337e" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handlePress}>
            <PreviousIconWhite width={30} height={30} />
          </TouchableOpacity>

          <Text style={styles.headerText}>Subscription</Text>
        </View>

        <View style={styles.ParentContainerForMemberPrice}>
          <FlatList
            data={subscriptionArray}
            keyExtractor={item => String(item.id)}
            renderItem={renderSubscription}
          />
        </View>

        {/* Now in the one FlatList I will render what are the features each member will get after activation of the member subscription */}

        <View style={styles.mainContainerForList}>
          <FlatList
            data={dataArray}
            keyExtractor={item => String(item.id)}
            renderItem={renderEachItem}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={navigateAccordingToPaymentStatus}>
            <Text style={styles.btnText}>
              Subscribe to {selectedSubscriptionInfo?.subscriptionType}
            </Text>
            <Text style={styles.btnPriceText}>
              {selectedSubscriptionInfo?.price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerContainer: {
    backgroundColor: '#19337e',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 25,
    marginBottom: 12,
    // padding: 20,
    paddingTop: 25,
    paddingBottom: 110,
    paddingLeft: 10,
  },
  headerText: {
    color: '#F5F5F5',
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    marginLeft: 10,
  },
  ParentContainerForMemberPrice: {
    // backgroundColor: 'yellow',
    backgroundColor: '#fafafa',
    rowGap: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 10,
    position: 'absolute',
    top: 110,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,
    paddingTop: 20,
  },
  MemberPrice: {
    width: '82%',
    borderWidth: 1.5,
    borderColor: '#2B2B2B1A',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  child1: {},
  child2: {},
  child1Text: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    color: '#2B2B2B',
  },
  child2Text1: {
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    color: '#001E61',
  },
  child2Text1SubText: {
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
    color: '#001E61',
  },
  child2Text2: {
    fontSize: 10,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2BBF',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
    backgroundColor: '#19337e',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 13,
    // borderWidth: 2,
    borderRadius: 15,
    // borderColor: '#011e62',
    marginBottom: 15,
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Mulish-Bold',
  },
  btnPriceText: {
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
    color: '#FFFFFF',
  },
  btnSubPriceText: {
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
    color: '#FFFFFF',
  },
  mainContainerForList: {
    width: '95%',
    alignSelf: 'center',
    // backgroundColor: 'yellow',
    marginTop: 160,
  },
  individualContainer: {
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 13,
    marginLeft: 10,
  },
  subContainer1: {
    paddingTop: 4,
  },
  subContainer2: {
    marginLeft: 10,
  },
  containerHeading: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    marginBottom: 10,
  },
  containerPara: {
    color: '#373737',
    fontSize: 13,
    fontFamily: 'Mulish-Medium',
    lineHeight: 19,
  },
  SecondMemberPrice: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#294090',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 22,
  },
  bestValueText: {
    color: '#2B2B2B',
    fontSize: 10,
    fontFamily: 'Mulish-Bold',
    backgroundColor: '#FED57C',
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    position: 'absolute',
    top: -12,
    left: 10,
  },
  selectSubscriptionBtn: {
    // backgroundColor: 'aqua',
    width: '100%',
    // alignItems: 'center',
    // alignSelf: 'center',
    padding: 10,
  },
});

export default Subscription;
