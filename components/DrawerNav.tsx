import 'react-native-gesture-handler';   //!make sure it is at the top and nothing is there before it 
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Subscription from '../src/screen/subscription/subscription.screen';
import Verification from '../src/screen/verification/verification.screen';
import LegalDocuments from '../src/screen/legal-documents/legal-documents.screen';
import TransactionHistory from '../src/screen/transaction-history/transaction-history.screen';
import ContactUs from '../src/screen/contact-us/contact-us.screen';
import AboutUs from '../src/screen/about-us/about-us.screen';
import DeleteAccount from '../src/screen/delete-account/delete-account.screen';
import Logout from '../src/screen/logout/logout.screen';
import BottomTab, { BottomTabScreens } from './BottomTab';

export type DrawerNavScreens = {
  BottomTab: BottomTabScreens;
  Subscription: undefined;
  Verification: undefined;
  LegalDocuments: undefined;
  TransactionHistory: undefined;
  ContactUs: undefined;
  AboutUs: undefined;
  DeleteAccount: undefined;
  Logout: undefined;
}

//THEN i HAVE CREATE THE INSTANCE OF createDrawerNavigator
const Drawer = createDrawerNavigator<DrawerNavScreens>();


const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "yellow", width: 300 },
        drawerPosition: "right",
        swipeEdgeWidth: 100,
      }}
    >
      <Drawer.Screen name='BottomTab' component={BottomTab} />
      <Drawer.Screen name='Subscription' component={Subscription} />
      <Drawer.Screen name='Verification' component={Verification} />
      <Drawer.Screen name='LegalDocuments' component={LegalDocuments} />
      <Drawer.Screen name='TransactionHistory' component={TransactionHistory} />
      <Drawer.Screen name='ContactUs' component={ContactUs} />
      <Drawer.Screen name='AboutUs' component={AboutUs} />
      <Drawer.Screen name='DeleteAccount' component={DeleteAccount} />
      <Drawer.Screen name='Logout' component={Logout} />
    </Drawer.Navigator>
  );
};
export default DrawerNav;