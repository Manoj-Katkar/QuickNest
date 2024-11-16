import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './components/Header'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>home</Text>
      <Header/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"aqua"
    },
    text:{
        fontSize:30
    }
  })

export default Home