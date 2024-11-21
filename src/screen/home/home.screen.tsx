import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Verification from './components/Verification'
import Contacts from './components/Contacts'
import Protect from './components/Protect'
import SafeTip from './components/SafeTip'
import Tip from './components/Tip'
import QuickGuide from './components/QuickGuide'
import CommingSoon from './components/CommingSoon'
import TradeMark from './components/TradeMark'
import GetInTouch from './components/GetInTouch'

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      
      <Header nav={navigation}/>
      <Verification/>
      <Contacts/>
      <Protect/>
      <SafeTip/>
      <Tip/>
      <QuickGuide/>
      <CommingSoon nav={navigation}/>
      <GetInTouch/>
      <TradeMark/>



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