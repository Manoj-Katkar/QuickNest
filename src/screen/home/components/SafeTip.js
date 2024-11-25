import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import MarieIcon from '../../../../assets/icons/MarieIcon'
import MarcusIcon from '../../../../assets/icons/MarcusIcon'
import JakeIcon from '../../../../assets/icons/JakeIcon'
import IsabellIcon from '../../../../assets/icons/IsabellIcon'
import PersonalIcon from '../../../../assets/icons/PersonalIcon'
import HomeNewIcon from '../../../../assets/icons/HomeNewIcon'
import VehicalIcon from '../../../../assets/icons/VehicalIcon'
import TravelIcon from '../../../../assets/icons/TravelIcon'
import NotIcon from '../../../../assets/icons/NotIcon'

const SafeTip = () => {
  return (
    <View style={styles.container1}>
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>Tips to be safe</Text>
      </View>

      <ScrollView horizontal style={styles.subContainer2}>
        <TouchableOpacity>
          <PersonalIcon  style={styles.tip1}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <HomeNewIcon  style={styles.tip2}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <VehicalIcon  style={styles.tip3}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <TravelIcon  style={styles.tip4}/>
        </TouchableOpacity>
        
        
        
        

      </ScrollView>


    <View style={styles.container2}>
      

      <View style={styles.subContainer1_1}>
        <Text style={styles.text1_1}>Tip 1</Text>
      </View>


      <View style={styles.subContainer2_1}>

        <NotIcon width={25} height={25}/>
        <Text style={styles.text2_1}>Always be aware of your {"\n"} surroundings</Text>

      </View>

    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container1:{
        // backgroundColor:"red",
        marginTop:25,
        
        // alignSelf:"center"
    },
    subContainer1:{
        // backgroundColor:"yellow",
        paddingLeft:22,
        marginBottom:10

    },
    subContainer2:{
        flexDirection:"row",
        // justifyContent:"space-evenly",
        // backgroundColor:"aqua",
        marginTop:10

    },
    text1:{
      fontSize:22,
      fontFamily:"Mulish-Bold",
      color:"black"

    },
    container2:{
      width:"95%",
      alignSelf:"center",
      marginTop:20,
      // backgroundColor:"aqua",
       backgroundColor:"white",
       borderRadius:12,
      paddingBottom:15 

      
    },
    subContainer1_1:{
        paddingLeft:22,
        // backgroundColor:"yellow"
    },
    subContainer2_1:{
        flexDirection:"row",
        paddingLeft:22,
       

    },
    text1_1:{
        fontSize:18,
        fontFamily:"Mulish-Regular",
        marginTop:15,
        marginBottom:15,
        color:"black",
        // backgroundColor:"purple"
    },
    text2_1:{
        fontSize:18,
        fontFamily:"Mulish-SemiBold",
        paddingLeft:12,
        color:"black",
        lineHeight:20
    },
    tip1:{
      marginLeft:30
    },
    tip2:{
      marginLeft:40
    },
    tip3:{
      marginLeft:40
    },
    tip4:{
      marginLeft:40
    },



})

export default SafeTip