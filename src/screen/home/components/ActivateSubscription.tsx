import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ActivateIcon from '../../../../assets/icons/ActivateIcon';
import NextWhiteIcon from '../../../../assets/icons/NextWhiteIcon';

const ActivateSubscription = ({navigation}: any) => {
  const reDirectToSubscriptionScreen = () => {};
  return (
    <>
      <TouchableOpacity onPress={reDirectToSubscriptionScreen}>
        <View style={styles.mainContainer}>
          <View style={styles.child1}>
            <ActivateIcon width={30} height={30} style={styles.icon1} />
          </View>
          <View style={styles.child2}>
            <Text style={styles.child2Text1}>Activate subscription plan</Text>
            <Text style={styles.child2Text2}>Unlock Full Protection Now!</Text>
          </View>

          <View style={styles.child3}>
            <NextWhiteIcon width={30} height={30} style={styles.icon2} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '92%',
    // height: 80,
    backgroundColor: '#001E61',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  child1: {
    width: '15%',
    // backgroundColor: 'yellow',
    alignSelf: 'flex-start',
  },
  child2: {
    width: '70%',
  },
  child3: {
    width: '15%',
  },
  child2Text1: {
    fontSize: 18,
    paddingBottom: 5,
    fontFamily: 'Mulish-SemiBold',
    color: '#F5F5F5',
  },
  child2Text2: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#F5F5F5BF',
  },
  icon1: {
    position: 'absolute',
    top: 1,
    left: 10,
  },
  icon2: {
    position: 'absolute',
    top: -1,
    left: 10,
  },
});
export default ActivateSubscription;
