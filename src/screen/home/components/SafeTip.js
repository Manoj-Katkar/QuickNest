import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MarieIcon from '../../../../assets/icons/MarieIcon'
import MarcusIcon from '../../../../assets/icons/MarcusIcon'
import JakeIcon from '../../../../assets/icons/JakeIcon'
import IsabellIcon from '../../../../assets/icons/IsabellIcon'
import PersonalIcon from '../../../../assets/icons/PersonalIcon'
import HomeNewIcon from '../../../../assets/icons/HomeNewIcon'
import VehicalIcon from '../../../../assets/icons/VehicalIcon'
import TravelIcon from '../../../../assets/icons/TravelIcon'
import NotIcon from '../../../../assets/icons/NotIcon'

const tipsArray = [
  {
    id:1,
    tipCount : "Tip 1",
    actualTipContent: "Always be aware of your \n surroundings"
  },
  {
    id:2,
    tipCount : "Tip 2",
    actualTipContent: "Always ensure your home is secure \n and well-maintained."
  },
  {
    id:3,
    tipCount : "Tip 3",
    actualTipContent: "Keep your vehicle secure and \n well-serviced."
  },
  {
    id:4,
    tipCount : "Tip 4",
    actualTipContent: "Stay alert and plan ahead \n while traveling."
  },
]

const SafeTip = () => {

  const [selectedTipId, setSelectedTipId] = useState(tipsArray[0].id); // Keep track of selected tip ID

  const [tipCount , setTipCount] = useState(`${tipsArray[0].tipCount}`);

  const [tipName , setTipName] = useState(`${tipsArray[0].actualTipContent}`);

  console.log(tipName , tipCount);
  

  const changeTipMessage = (id) => {
    // Find the tip with the matching id
    const selectedTip = tipsArray.find((tip) => tip.id === id);

    if (selectedTip) {
      setSelectedTipId(id); // Update the selected tip ID
      setTipCount(selectedTip.tipCount); // Update the tip count
      setTipName(selectedTip.actualTipContent); // Update the tip content
    }
  };

  return (
    <View style={styles.container1}>
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>Tips to be safe</Text>
      </View>

      <ScrollView horizontal style={styles.subContainer2}>

      <TouchableOpacity
          onPress={() => {
            changeTipMessage(1); // Trigger change for Tip 1
          }}
        >
          <PersonalIcon style={styles.tip1} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            changeTipMessage(2); // Trigger change for Tip 2
          }}
        >
          <HomeNewIcon style={styles.tip2} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            changeTipMessage(3); // Trigger change for Tip 3
          }}
        >
          <VehicalIcon style={styles.tip3} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            changeTipMessage(4); // Trigger change for Tip 4
          }}
        >
          <TravelIcon style={styles.tip4} />
        </TouchableOpacity>
        
        
        
        

      </ScrollView>


    <View style={styles.container2}>
      

      <View style={styles.subContainer1_1}>
        <Text style={styles.text1_1}>{tipCount}</Text>
      </View>


      <View style={styles.subContainer2_1}>

        <NotIcon width={25} height={25}/>
        <Text style={styles.text2_1}>{tipName}</Text>

      </View>

    </View>

    {/*Taking the view For the which one tip is getting shown that should get highlighted by the its children view  */}


      {/* Highlight the selected tip */}
      <View style={styles.highLighTipContainer}>
        {tipsArray.map((tip) => (
          <View
            key={tip.id}
            style={[
              styles.horizontalLine,
              selectedTipId === tip.id && styles.selectedLine, // Apply selected style using the logical and operator which is used for the only true case of the scenaroies
              selectedTipId === tip.id && { width: "5%" }, // Dynamically increase width for selected line
            ]}
          />
        ))}
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
    highLighTipContainer: {
      // backgroundColor:"magenta",
      width: "95%",
      // alignSelf: "center",
      flexDirection: "row",
      alignSelf:"flex-end",
      marginTop: 10,
      paddingRight: 10,
      position:"absolute",
      top:230,
      left:300
    },
    horizontalLine: {
      width: "3%",
      height: 7,
      backgroundColor: "#ccc", // Default color for unselected lines
      marginVertical: 2,
      borderRadius: 10,
      marginLeft: 5,
      
    },
    selectedLine: {
      backgroundColor: "#488eca", // Highlighted color
    },



})

export default SafeTip