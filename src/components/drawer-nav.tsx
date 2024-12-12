import 'react-native-gesture-handler'; //^make sure it is at the top and nothing is there before it
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Subscription from '../screen/subscription/subscription.screen';
import Verification from '../screen/verification/verification.screen';
import LegalDocuments from '../screen/legal-documents/legal-documents.screen';
import TransactionHistory from '../screen/transaction-history/transaction-history.screen';
import ContactUs from '../screen/contact-us/contact-us.screen';
import AboutUs from '../screen/about-us/about-us.screen';
import DeleteAccount from '../screen/delete-account/delete-account.screen';
import Logout from '../screen/logout/logout.screen';
import BottomTab, {BottomTabScreens} from './bottom-tab';
import Header from '../screen/home/components/Header';
import {Dimensions, StyleSheet} from 'react-native';

import UserUI from './user-ui';

export type DrawerNavScreens = {
  BottomTab: BottomTabScreens;
  HouseServices: undefined;
  Subscription: undefined;
  Verification: undefined;
  LegalDocuments: undefined;
  TransactionHistory: undefined;
  ContactUs: undefined;
  AboutUs: undefined;
  DeleteAccount: undefined;
  Logout: undefined;
};

//THEN i HAVE CREATE THE INSTANCE OF createDrawerNavigator
const Drawer = createDrawerNavigator<DrawerNavScreens>();

const DrawerNav = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: '#011e62', width: screenWidth},
        drawerPosition: 'right', // This is ignored if swipeEnabled is false
        swipeEnabled: false, // Disables the swipe gesture to open the drawer
        swipeEdgeWidth: 50,
        drawerLabelStyle: {
          color: '#e8ebfc', // Change label color
        },
      }}
      // ^For Drawer Ui We Have to create the another Component And render it and then handle the navigation in it no need to use options and add ui for each scrren (it will increase the code redundancy)

      drawerContent={props => <UserUI props={props} />} //!prefer this approach
    >
      {/* Here rendered the BottomTab Navigation under the same name Home because user can easilly able to understand what is happenining  */}

      <Drawer.Screen name="BottomTab" component={BottomTab} />

      <Drawer.Screen name="Subscription" component={Subscription} />

      <Drawer.Screen name="Verification" component={Verification} />

      <Drawer.Screen name="LegalDocuments" component={LegalDocuments} />

      <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />

      <Drawer.Screen name="ContactUs" component={ContactUs} />

      <Drawer.Screen name="AboutUs" component={AboutUs} />

      <Drawer.Screen name="DeleteAccount" component={DeleteAccount} />

      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // backgroundColor:"black",
  },
  labelText: {
    fontSize: 16,
    color: '#e8ebfc',
    paddingLeft: 19,
  },
  subContainer1: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"yellow"
  },
  subContainer2: {
    width: '30%',
    // backgroundColor:"maroon",
  },
  deleteText: {
    fontSize: 16,
    color: 'red',
    paddingLeft: 19,
  },
  nextIcon: {
    alignSelf: 'center',
    color: 'white',
  },
  button: {
    width: '90%',
    backgroundColor: 'transparent',
    paddingTop: 10,

    paddingBottom: 10,
    paddingLeft: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4f82be',
  },
  text3: {
    color: '#4f82be',
    fontWeight: '400',
  },
  parentContainer: {
    width: '110%',
    // backgroundColor:"black"
  },
  childContainer1: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  childContainer2: {
    flexDirection: 'row',
    alignSelf: 'center',
    // justifyContent:"space-evenly",
    paddingTop: 0,
  },
  subChild1: {
    // backgroundColor:"red",
    // paddingLeft:5
  },
  subChild2: {
    // backgroundColor:"aqua",
    paddingLeft: 15,
  },
  name: {
    fontSize: 25,
    fontWeight: '500',
    color: '#e8ebfc',
    marginBottom: 10,
  },
  phoneNo: {
    fontSize: 15,
    marginBottom: 10,
    color: '#e8ebfc',
  },
});
export default DrawerNav;
