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
            <HeadPhone width={55} height={55} style={styles.headPhone}/>
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

        marginTop:20,
        // backgroundColor:"aqua",
       
        
    },
    subContainer:{
        // backgroundColor:"red",
        width:"90%",
        alignSelf:"center",
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        // alignSelf:"center",
        paddingTop:20,
        borderWidth:0.2,
        borderColor:"gray",
        paddingBottom:20,
        paddingRight:10,
        paddingLeft:10,
        marginTop:10
    },
    subContainerPart1:{

    },
    subContainerPart2:{
        // width:"60%",
        height:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        // backgroundColor:"red",
        position:"relative"
    },
    text:{
        paddingLeft:22,
        fontSize:22,
        color:"black",
        fontFamily:"Mulish-Bold",
        marginBottom:10
    },
    text1:{
        fontSize:20,
        fontFamily:"Mulish-Bold",
        color:"black",
        marginBottom:10

    },
    text2:{
        fontSize:17,
        fontFamily:"Mulish-Regular",
        color:"black",
        marginBottom:10
    },
    text3:{
        color:"#212f5a",
        // fontWeight:"400"
        fontSize:17,
        fontFamily:"Mulish-Bold",
    },
    button:{
        backgroundColor: '#fafafa',
        paddingTop: 10,
        paddingRight: 35,
        paddingBottom: 10,
        paddingLeft: 40,
        borderRadius: 10,
        borderWidth:1.5,
        borderColor:"#212f5a",
        alignSelf:"flex-end",
        marginTop:65
        
    

    
    
    },
    headPhone:{
        // alignSelf:"center",
        paddingBottom:15,
        position:"absolute",
        top:-10,
        left:110,
        // bottom:100,
        // backgroundColor:"yellow",
    }

    

})

export default GetInTouch