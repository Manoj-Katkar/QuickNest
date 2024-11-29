import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Verification from './components/Verification';
import Contacts from './components/Contacts';
import Protect from './components/Protect';
import SafeTip from './components/SafeTip';
import QuickGuide from './components/QuickGuide';
import CommingSoon from './components/CommingSoon';
import TradeMark from './components/TradeMark';
import GetInTouch from './components/GetInTouch';
import TakeSpace from '../../components/take-space';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header nav={navigation} />
      <Verification />
      <Contacts />
      <Protect />
      <SafeTip />
      <QuickGuide />
      <CommingSoon nav={navigation} />
      <GetInTouch />
      <TakeSpace space={5} />
      <TradeMark />
      <TakeSpace space={30} />

      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
      {/* //this way I can handle the status bar of the android applications */}
      {/* //barStyle takes two arguments : 1) dark-content , 2) light-content */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  text: {
    fontSize: 30,
  },
});

export default Home;
