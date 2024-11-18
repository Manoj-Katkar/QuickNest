import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NotIcon from '../../../../assets/icons/NotIcon'

const Tip = () => {
  return (
    <View style={styles.container}>
      

      <View style={styles.subContainer1}>
        <Text style={styles.text1}>Tip 1</Text>
      </View>


      <View style={styles.subContainer2}>

        <NotIcon width={30} height={30}/>
        <Text style={styles.text2}>Always be aware of your {"\n"} surroundings</Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        // backgroundColor:"aqua",

        
    },
    subContainer1:{
        paddingLeft:28
    },
    subContainer2:{
        flexDirection:"row",
        paddingLeft:28

    },
    text1:{
        fontSize:22,
        marginTop:15,
        marginBottom:15,
        color:"black"
    },
    text2:{
        fontSize:18,
        paddingLeft:12,
        color:"black"
    },


})

export default Tip