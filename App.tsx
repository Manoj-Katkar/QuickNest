import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BottomTab from './components/BottomTab'

const App = () => {
  return (
    <View style={styles.container}>

      
        <BottomTab/>

    </View>
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