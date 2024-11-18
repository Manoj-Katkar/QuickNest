import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Verification from './components/Verification'
import Contacts from './components/Contacts'
import Protect from './components/Protect'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      
      <Header/>
      <Verification/>
      <Contacts/>
      <Protect/>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fafafa"
    },
    text:{
        fontSize:30
    }
  })

export default Home