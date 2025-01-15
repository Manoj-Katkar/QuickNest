import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import PreviousIcon from '../../../assets/icons/PreviousIcon';
import PreviousIconWhite from '../../../assets/icons/PreviousIconWhite';
import RightIcon from '../../../assets/icons/RightIcon';
import NetInfo, {
  addEventListener,
  useNetInfo,
} from '@react-native-community/netinfo';
import {fetch} from '@react-native-community/netinfo';

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

// Define prop types using FC
interface RenderServiceFeatureProps {
  heading: string;
  para: string;
}

const HouseHoldMember = ({navigation}: any) => {
  const {type, isConnected} = useNetInfo();
  const [paymentStatus, setPaymentStatus] = useState(true); //by default making it as true intentionally to re-direct to the payment success screen

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

  const navigateAccordingToPaymentStatus = () => {
    if (paymentStatus === true && isConnected === true) {
      // console.log('Navigating to PaymentSuccessful');
      navigation.navigate('PaymentSuccessful');
    } else if (paymentStatus === false) {
      // console.log('Navigating to PaymentUnsuccessful');
      navigation.navigate('PaymentUnsuccessful');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handlePress}>
            <PreviousIconWhite width={30} height={30} />
          </TouchableOpacity>

          <Text style={styles.headerText}>Add Household Member</Text>
        </View>

        <View style={styles.ParentContainerForMemberPrice}>
          <View style={styles.MemberPrice}>
            <View style={styles.child1}>
              <Text style={styles.child1Text}>Per member</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.child2Text1}>
                £ 1.<Text style={styles.child2Text1SubText}>99</Text>
              </Text>
              <Text style={styles.child2Text2}>/ monthly</Text>
            </View>
          </View>
        </View>

        {/* Now in the one FlatList I will render what are the features each member will get after activation of the member subscription */}

        <View style={styles.mainContainerForList}>
          <FlatList
            data={dataArray}
            keyExtractor={item => item.id}
            renderItem={renderEachItem}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={navigateAccordingToPaymentStatus}>
            <Text style={styles.btnText}>Add member</Text>
            <Text style={styles.btnPriceText}>
              £ 1.<Text style={styles.btnSubPriceText}>99</Text>
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
    paddingTop: 55,
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
    paddingVertical: 20,
    width: '90%',
    borderRadius: 10,
    position: 'absolute',
    top: 135,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MemberPrice: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#294090',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 18,
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
    marginTop: 60,
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
});

export default HouseHoldMember;
