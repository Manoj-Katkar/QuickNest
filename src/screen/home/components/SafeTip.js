import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MarieIcon from '../../../../assets/icons/MarieIcon'
import MarcusIcon from '../../../../assets/icons/MarcusIcon'
import JakeIcon from '../../../../assets/icons/JakeIcon'
import IsabellIcon from '../../../../assets/icons/IsabellIcon'
import PersonalIcon from '../../../../assets/icons/PersonalIcon'
import HomeNewIcon from '../../../../assets/icons/HomeNewIcon'
import VehicalIcon from '../../../../assets/icons/VehicalIcon'
import TravelIcon from '../../../../assets/icons/TravelIcon'

const SafeTip = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>Tips to be safe</Text>
      </View>

      <View style={styles.subContainer2}>
        <PersonalIcon/>
        <HomeNewIcon/>
        <VehicalIcon/>
        <TravelIcon/>

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
        fontWeight:"900",
        color:"black"

    }

})

export default SafeTip