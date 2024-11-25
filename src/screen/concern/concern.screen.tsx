import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Concern = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Concern Screen</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"yellow"

  },
  text:{
      fontSize:30,
      color:"black"
  }
})

export default Concern