import React from 'react';
import Home from '../screen/home/home.screen';
import Concern from '../screen/concern/concern.screen';
import Member from '../screen/member/member.screen';
import Enquiry from '../screen/enquiry/enquiry.screen';
import HomeIcon from '../../assets/icons/HomeIcon';
import ConcernIcon from '../../assets/icons/ConcernIcon';
import MemberIcon from '../../assets/icons/MemberIcon';
import EnquiryIcon from '../../assets/icons/EnquiryIcon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabComp from './bottomtab-comp';
import {Image} from 'react-native';
import {Image as constantImage} from '../constant/images';

export type BottomTabScreens = {
  Home: undefined;
  Concern: undefined;
  Member: undefined;
  Enquiry: undefined;
};

// !create the instance of the createBottomTabNavigator

const Tab = createBottomTabNavigator<BottomTabScreens>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarLabelPosition:"beside-icon"   //by default it will be below icons which represent the name should display where in differant divices like tab and mobile it differs
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: false, //this will handle whether the to display the label or not label means that name only
        headerShown: false,
      }}
      // !adding the custom bottom tab navigator component
      // tabBar={() => <BottomTabComp />
      tabBar={() => <Concern />}

      // tabBar={() => <Concern />}
    >
      {/* Now also changing the icons of the each page  */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: () => <HomeIcon />, headerShown: false}}
      />
      <Tab.Screen
        name="Concern"
        component={Concern}
        options={{tabBarIcon: () => <ConcernIcon />}}
      />
      <Tab.Screen
        name="Member"
        component={Member}
        options={{tabBarIcon: () => <MemberIcon />}}
      />
      <Tab.Screen
        name="Enquiry"
        component={Enquiry}
        options={{tabBarIcon: () => <EnquiryIcon />}}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
