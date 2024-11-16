import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../src/screen/home/home.screen';
import Concern from '../src/screen/concern/concern.screen';
import Member from '../src/screen/member/member.screen';
import Enquiry from '../src/screen/enquiry/enquiry.screen';
import { Image, StyleSheet } from 'react-native';
import HomeIcon from '../assets/icons/HomeIcon';
import ConcernIcon from '../assets/icons/ConcernIcon';
import MemberIcon from '../assets/icons/MemberIcon';
import EnquiryIcon from '../assets/icons/EnquiryIcon';



// !create the instance of the createBottomTabNavigator

const Tab = createBottomTabNavigator();




const BottomTab = () => {


  return (
    <NavigationContainer>
        <Tab.Navigator
        
        screenOptions={{
            // tabBarLabelPosition:"beside-icon"   //by default it will be below icons which represent the name should display where in differant divices like tab and mobile it differs 
            
            tabBarLabelPosition:"below-icon",

            //tabBarShowLabel:false                //this will handle whether the to display the label or not label means that name only 
            
            tabBarShowLabel:true,

            tabBarActiveTintColor:"red",              //which sets the active tab label font color 

            tabBarInactiveTintColor:"purple" ,           // this color will get apply to the labels which are currentlly in-active on our application 
            

            // Customize the tab label font size and other styles here
            tabBarLabelStyle: {
                fontSize: 10, // Increase the font size
                fontWeight: 'bold', // Optionally make the text bold
            },
        }}


        
        
        >
            {/* Now also changing the icons of the each page  */}

            <Tab.Screen   name='Home' component={Home}

                    options={{
                        tabBarIcon: () => <HomeIcon />
                    }}
            />


            <Tab.Screen   name='Concern' component={Concern}
            

                    options={{
                        tabBarIcon: () => <ConcernIcon />
                    }}
            />


            <Tab.Screen   name='Member' component={Member}
            

                    options={{
                        tabBarIcon: () => <MemberIcon />
                    }}
            />


            <Tab.Screen   name='Enquiry' component={Enquiry}
            

                    options={{
                        tabBarIcon: () => <EnquiryIcon />
                    }}
            />

        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"aqua"
    },
    text:{
        fontSize:30
    },
    image:{
        width:100
    }
  })

export default BottomTab