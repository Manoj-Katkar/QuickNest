import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import DrawerNav from './components/DrawerNav'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack= createNativeStackNavigator<{
  DrawerNav:undefined;
  BottomTab:undefined;
}>()

const App = () => {
  return (
    <NavigationContainer ref={undefined} >
      <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='DrawerNav' component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>

      
  


  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  text:{
    fontSize:30,
    color:"red"
  }
})


export default App