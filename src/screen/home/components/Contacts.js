import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MarieIcon from '../../../../assets/icons/MarieIcon'
import MarcusIcon from '../../../../assets/icons/MarcusIcon'
import JakeIcon from '../../../../assets/icons/JakeIcon'
import IsabellIcon from '../../../../assets/icons/IsabellIcon'

const Contacts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>Household Member Contacts</Text>
      </View>

      <View style={styles.subContainer2}>
        <MarieIcon/>
        <MarcusIcon/>
        <JakeIcon/>
        <IsabellIcon/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:"red",
        marginTop:25,
        
        // alignSelf:"center"
    },
    subContainer1:{
        // backgroundColor:"yellow",
        paddingLeft:28

    },
    subContainer2:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        // backgroundColor:"aqua",
        marginTop:10

    },
    text1:{
        fontSize:25,
        fontWeight:"900"
    }

})

export default Contacts