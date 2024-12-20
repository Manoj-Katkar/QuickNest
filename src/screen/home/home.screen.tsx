//Main Home screen from where user can re-direct to the multiple screens
import {View, StatusBar, FlatList, Alert} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Header from './components/Header';
import TakeSpace from '../../components/take-space';
import {
  CommingSoon,
  Contacts,
  GetInTouch,
  Protect,
  QuickGuide,
  SafeTip,
  TradeMark,
  Verification,
} from './components';

const Home = ({navigation}: any) => {
  const renderHome = useCallback(() => {
    return (
      <View>
        <Verification />
        <Contacts />
        <Protect />
        <SafeTip />
        <QuickGuide />
        <TakeSpace space={10} />
        <CommingSoon nav={navigation} />
        <GetInTouch />
        {/* Customizing the StatusBar */}

        <TakeSpace space={10} />
        {/* <TakeSpace space={10} />
        <RedirectNotification nav={navigation} />
        <TakeSpace space={50} /> */}
      </View>
    );
  }, []);

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
