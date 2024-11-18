import 'react-native-gesture-handler';   //!make sure it is at the top and nothing is there before it 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, Text } from 'react-native'
import React from 'react'
import Subscription from '../src/screen/subscription/subscription.screen';
import Verification from '../src/screen/verification/verification.screen';
import LegalDocuments from '../src/screen/legal-documents/legal-documents.screen';
import TransactionHistory from '../src/screen/transaction-history/transaction-history.screen';
import ContactUs from '../src/screen/contact-us/contact-us.screen';
import AboutUs from '../src/screen/about-us/about-us.screen';
import DeleteAccount from '../src/screen/delete-account/delete-account.screen';
import Logout from '../src/screen/logout/logout.screen';
import BottomTab from './BottomTab';


//THEN i HAVE CREATE THE INSTANCE OF createDrawerNavigator
const Drawer = createDrawerNavigator <any>();



export default function DrawerNav() {
  return (

    
            <Drawer.Navigator 
            screenOptions={{headerShown:false , 
              drawerStyle: { backgroundColor: "white", width: 280  } , 
              drawerPosition:"right" , 
              swipeEdgeWidth:50 , 
              }}
            >

                <Drawer.Screen name='BottomTab'  component={BottomTab}/>
                
                <Drawer.Screen name='Subscription'  component={Subscription}/>

                <Drawer.Screen name='Verification'  component={Verification}/>


                <Drawer.Screen name='Legal Documents'  component={LegalDocuments}/>


                <Drawer.Screen name='Transaction History'  component={TransactionHistory}/>


                <Drawer.Screen name='Contact Us'  component={ContactUs}/>

                <Drawer.Screen name='About Us'  component={AboutUs}/>

                <Drawer.Screen name='Delete account'  component={DeleteAccount}/>

                <Drawer.Screen name='Logout'  component={Logout}/>


            </Drawer.Navigator>



  )
}