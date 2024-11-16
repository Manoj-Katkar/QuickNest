import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Member = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>member</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"purple"
  
    },
    text:{
        fontSize:30
    }
  })

export default Member