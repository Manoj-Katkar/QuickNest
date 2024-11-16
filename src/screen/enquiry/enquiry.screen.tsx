import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Enquiry = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>enquiry</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"yellow"
  
    },
    text:{
        fontSize:30
    }
  })

export default Enquiry