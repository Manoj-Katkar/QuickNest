import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Concern = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>concern</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"pink"
  
    },
    text:{
        fontSize:30
    }
  })

export default Concern