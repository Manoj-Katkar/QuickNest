import React from 'react'
import DrawerNav, { DrawerNavScreens } from './components/DrawerNav'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator<{
  DrawerNav: DrawerNavScreens;
}>()

const App = () => {
  return (
    <NavigationContainer ref={undefined} >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='DrawerNav' component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App