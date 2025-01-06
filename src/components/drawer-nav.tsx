import 'react-native-gesture-handler'; //^make sure it is at the top and nothing is there before it
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabScreens} from './bottom-tab';
import {StatusBar, StyleSheet} from 'react-native';
import UserUI from './user-ui';
import {screenWidth} from '../responsive';
import {screens} from './LazyComponent';
import {useFocusEffect} from '@react-navigation/native';

export type DrawerNavScreens = {
  BottomTab: BottomTabScreens;
  HouseServices: undefined;
  Subscription: undefined;
  Verification: undefined;
  LegalDocuments: undefined;
  TransactionHistory: undefined;
  ContactUs: undefined;
  AboutUs: undefined;
  Setting: undefined;
  DeleteAccount: undefined;
  Logout: undefined;
};

//THEN i HAVE CREATE THE INSTANCE OF createDrawerNavigator
const Drawer = createDrawerNavigator<DrawerNavScreens>();

const DrawerNav = () => {
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
      <Drawer.Screen name="BottomTab" component={screens.BottomTab} />
      <Drawer.Screen name="Subscription" component={screens.Subscription} />
      <Drawer.Screen name="Verification" component={screens.Verification} />
      <Drawer.Screen name="LegalDocuments" component={screens.LegalDocuments} />
      <Drawer.Screen
        name="TransactionHistory"
        component={screens.TransactionHistory}
      />
      <Drawer.Screen name="ContactUs" component={screens.ContactUs} />
      <Drawer.Screen name="AboutUs" component={screens.AboutUs} />
      <Drawer.Screen name="Setting" component={screens.Setting} />

      <Drawer.Screen name="DeleteAccount" component={screens.DeleteAccount} />
      <Drawer.Screen name="Logout" component={screens.Logout} />
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
