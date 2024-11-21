import React from 'react'
import DrawerNav, { DrawerNavScreens } from './components/DrawerNav'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HouseServices from './src/screen/house-services/house-services.screen'
import { Platform } from 'react-native'




// const Stack = createNativeStackNavigator<{ DrawerNav: DrawerNavScreens }>()

// Update the type definition to include both screens
type RootStackParamList = {
  DrawerNav: DrawerNavScreens;
  House_Services: undefined; // Adjust the params if `House_Services` takes any
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer ref={undefined} >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='DrawerNav' component={DrawerNav} />

        <Stack.Screen name='House_Services' component={HouseServices} 
              options={{
                headerShown: true,

                title:"House Services",

                headerTitleStyle:{
                  fontWeight:"bold",
                  fontSize:25
                },

                headerStyle: {
                  backgroundColor: "#fafafa", // Background color of the header

                  ...(Platform.OS === 'android' ? { elevation: 0 } : { shadowOpacity: 0 }), // Platform-specific styling
                
                },

              }}


        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App