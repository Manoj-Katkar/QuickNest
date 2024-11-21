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
import Header from '../src/screen/home/components/Header';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SubscriptionIcon from '../assets/icons/SubscriptionIcon';
import DrawerNextIcon from '../assets/icons/DrawerNextIcon';
import DrawerVerificationIcon from '../assets/icons/DrawerVerificationIcon';
import LegalIcon from '../assets/icons/LegalIcon';
import TransactionIcon from '../assets/icons/TransactionIcon';
import ContactIcon from '../assets/icons/ContactIcon';
import DrawerAboutUsIcon from '../assets/icons/DrawerAboutUsIcon';
import DeleteIcon from '../assets/icons/DeleteIcon';
import LogoutIcon from '../assets/icons/LogoutIcon';
import CrossIcon from '../assets/icons/CrossIcon';
import UserImageIcon from '../assets/icons/UserImageIcon';

export type DrawerNavScreens = {
  BottomTab: BottomTabScreens; 
  HouseServices:undefined;
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

  const screenWidth = Dimensions.get('window').width;

  return (
    <Drawer.Navigator

      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#011e62", width: screenWidth },
        drawerPosition: "right",   //this will open the drawer from the right side 
        swipeEdgeWidth: 300,
        drawerLabelStyle: {
          color: '#e8ebfc', // Change label color
        },
      }}




    >
      {/* Here rendered the BottomTab Navigation under the same name Home because user can easilly able to understand what is happenining  */}

      <Drawer.Screen name='BottomTab' component={BottomTab} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.parentContainer}>

                          <View style={styles.childContainer1}>
                            <CrossIcon width={30} height={30}/>
                          </View>


                          <View style={styles.childContainer2}>

                              <View style={styles.subChild1}>
                                  <UserImageIcon width={100} height={100}/>
                              </View>


                              <View style={styles.subChild2}>
                                  <Text style={styles.name}>Monkey D.Luffy</Text>
                                  <Text style={styles.phoneNo}>+1 234567890</Text>

                                  <TouchableOpacity style={styles.button}>
                                      <Text style={styles.text3}>Edit profile</Text>
                                  </TouchableOpacity>
                              </View>

                          </View>


                          
                        </View>
                      ),
                    }}
      />  




      <Drawer.Screen name='Subscription' component={Subscription} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.labelContainer}>

                          <View style={styles.subContainer1}>
                            <SubscriptionIcon/>
                            <Text style={styles.labelText}>Subscription</Text>
                          </View>

                          <View style={styles.subContainer2}>
                            <DrawerNextIcon style={styles.nextIcon} width={40} height={40}/>
                          </View>

                          
                        </View>
                      ),
                    }}
      />


      <Drawer.Screen name='Verification' component={Verification} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.labelContainer}>

                          <View style={styles.subContainer1}>
                            <DrawerVerificationIcon/>
                            <Text style={styles.labelText}>Verification</Text>
                          </View>

                          <View style={styles.subContainer2}>
                            <DrawerNextIcon style={styles.nextIcon} width={40} height={40}/>
                          </View>

                          
                        </View>
                      ),
                    }}
      />


      <Drawer.Screen name='LegalDocuments' component={LegalDocuments} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.labelContainer}>

                          <View style={styles.subContainer1}>
                            <LegalIcon/>
                            <Text style={styles.labelText}>Legal documents</Text>
                          </View>

                          <View style={styles.subContainer2}>
                            <DrawerNextIcon style={styles.nextIcon} width={40} height={40}/>
                          </View>

                          
                        </View>
                      ),
                    }}
      />


      <Drawer.Screen name='TransactionHistory' component={TransactionHistory} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.labelContainer}>

                          <View style={styles.subContainer1}>
                            <TransactionIcon/>
                            <Text style={styles.labelText}>Transaction history</Text>
                          </View>

                          <View style={styles.subContainer2}>
                            <DrawerNextIcon style={styles.nextIcon} width={40} height={40}/>
                          </View>

                          
                        </View>
                      ),
                    }}
      />


      <Drawer.Screen name='ContactUs' component={ContactUs} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.labelContainer}>

                          <View style={styles.subContainer1}>
                            <ContactIcon />
                            <Text style={styles.labelText}>Contact us</Text>
                          </View>

                          <View style={styles.subContainer2}>
                            <DrawerNextIcon style={styles.nextIcon} width={40} height={40}/>
                          </View>

                          
                        </View>
                      ),
                    }}
      />



      <Drawer.Screen name='AboutUs' component={AboutUs} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.labelContainer}>

                          <View style={styles.subContainer1}>
                            <DrawerAboutUsIcon />
                            <Text style={styles.labelText}>About us</Text>
                          </View>

                          <View style={styles.subContainer2}>
                            <DrawerNextIcon style={styles.nextIcon} width={40} height={40}/>
                          </View>

                          
                        </View>
                      ),
                    }}
      />


      <Drawer.Screen name='DeleteAccount' component={DeleteAccount} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.labelContainer}>

                          <View style={styles.subContainer1}>
                            <DeleteIcon />
                            <Text style={styles.deleteText}>Delete account</Text>
                          </View>

                          <View style={styles.subContainer2}>
                            <DrawerNextIcon style={styles.nextIcon} width={40} height={40}/>
                          </View>

                          
                        </View>
                      ),
                    }}
      />


      <Drawer.Screen name='Logout' component={Logout} 
                    options={{
                      drawerLabel: () => (
                        <View style={styles.labelContainer}>

                          <View style={styles.subContainer1}>
                            <LogoutIcon />
                            <Text style={styles.labelText}>Logout</Text>
                          </View>

                          <View style={styles.subContainer2}>
                            <DrawerNextIcon style={styles.nextIcon} width={40} height={40}/>
                          </View>

                          
                        </View>
                      ),
                    }}
      />
    </Drawer.Navigator>
  );
};



const styles = StyleSheet.create({

  labelContainer: {
    width:400,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',

    // backgroundColor:"black",

  },
  labelText: {
    fontSize: 16,
    color: '#e8ebfc',
    paddingLeft:19
  },
  subContainer1:{
    width:"70%",
    flexDirection:"row",
    alignItems:"center"
    // backgroundColor:"yellow"
  },
  subContainer2:{
    width:"30%",
    // backgroundColor:"maroon",


  },
  deleteText:{
    fontSize: 16,
    color: 'red',
    paddingLeft:19
  },
  nextIcon:{
    alignSelf:"center",
    color:"white"
  },
  button:{
    width:"90%",
    backgroundColor: 'transparent',
    paddingTop: 10,
 
    paddingBottom: 10,
    paddingLeft: 35,
    borderRadius: 20,
    borderWidth:1,
    borderColor:"#4f82be",
  
  },
  text3:{
    color:"#4f82be",
    fontWeight:"400"
  },
  parentContainer:{
    width:"110%",
    // backgroundColor:"black"
  },
  childContainer1:{
    flexDirection:"row",
    alignSelf:"flex-end"
  },
  childContainer2:{
    flexDirection:"row",
    alignSelf:"center",
    // justifyContent:"space-evenly",
    paddingTop:20
  },
  subChild1:{
    // backgroundColor:"red",
    // paddingLeft:5

  },
  subChild2:{
    // backgroundColor:"aqua",
    paddingLeft:20
  },
  name:{
    fontSize:25,
    fontWeight:"500",
    color:"#e8ebfc",
    marginBottom:10
  },
  phoneNo:{
    fontSize:15,
    marginBottom:10,
    color:"#e8ebfc",
  }
});
export default DrawerNav;