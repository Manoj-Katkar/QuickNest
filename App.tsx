import React from 'react';
import DrawerNav, {DrawerNavScreens} from './src/components/drawer-nav';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HouseServices from './src/screen/house-services/house-services.screen';
import {Platform, StatusBar} from 'react-native';
import Details from './src/screen/details/details.screen';

// const Stack = createNativeStackNavigator<{ DrawerNav: DrawerNavScreens }>()

// Update the type definition to include both screens
type RootStackParamList = {
  DrawerNav: DrawerNavScreens;
  House_Services: undefined; // Adjust the params if `House_Services` takes any
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
        <Stack.Screen name="House_Services" component={HouseServices} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={
            {
              // headerShown:true
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
