import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
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

const Home = ({navigation}: any) => {
  const renderHome = () => {
    return (
      <View style={{backgroundColor: '#fafafa'}}>
        <Verification />
        <Contacts />
        <Protect />
        <SafeTip />
        <QuickGuide />
        <TakeSpace space={10} />
        <CommingSoon nav={navigation} />
        <GetInTouch />
        {/* Customizing the StatusBar */}
        <StatusBar backgroundColor="#fafafa" barStyle="light-content" />
      </View>
    );
  };
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
