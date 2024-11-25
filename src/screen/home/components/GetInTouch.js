import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import HeadPhone from '../../../../assets/icons/HeadPhone'

const GetInTouch = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Get in touch with us</Text>

      <View style={styles.subContainer}>

        <View style={styles.subContainerPart1}>
            <Text style={styles.text1}>Contact us</Text>
            <Text style={styles.text2}>Tap the button to {"\n"} access or support {"\n"} options</Text>

        </View>


        <View style={styles.subContainerPart2}>
            <HeadPhone style={styles.headPhone}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text3}>Contact us</Text>
            </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container:{

        marginTop:30,
        // backgroundColor:"aqua",
       
        
    },
    subContainer:{
        
        // backgroundColor:"red",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        // alignSelf:"center",
        paddingTop:20
    },
    subContainerPart1:{

    },
    subContainerPart2:{
        height:100,
        justifyContent:"space-between",
        alignItems:"center",
        // backgroundColor:"red"
    },
    text:{
        paddingLeft:22,
        fontSize:22,
        color:"black",
        fontFamily:"Mulish-Bold"
    },
    text1:{
        fontSize:22,
        fontFamily:"Mulish-Bold",
        color:"black",
        marginBottom:10

    },
    text2:{
        fontSize:16,
        fontFamily:"Mulish-Regular",
        color:"black",
        marginBottom:10
    },
    text3:{
        color:"#212f5a",
        fontWeight:"400"
    },
    button:{
        backgroundColor: '#fafafa',
        paddingTop: 10,
        paddingRight: 35,
        paddingBottom: 10,
        paddingLeft: 35,
        borderRadius: 5,
        borderWidth:1,
        borderColor:"#212f5a",
    

    
    
    },
    headPhone:{
        // alignSelf:"center",
        paddingBottom:15
    }

    

})

export default GetInTouch