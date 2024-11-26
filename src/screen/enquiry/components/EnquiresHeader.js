import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PanicEnquiryIcon from '../../../../assets/icons/PanicEnquiryIcon'
import ConcernIcon from '../../../../assets/icons/ConcernIcon'
import ConcernEnquiryIcon from '../../../../assets/icons/ConcernEnquiryIcon'

const EnquiresHeader = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>EnquiresHeader</Text> */}

      <View style={styles.mainHeaderContainer}>
        <Text style={styles.text1}>Enquires</Text>

        <View style={styles.headerOptions}>
            <TouchableOpacity style={styles.btn1}>

                <View style={styles.btn1View}>
                <PanicEnquiryIcon width={25} height={25} style={styles.icon}/>
                <Text style={styles.text2}>Panic</Text>
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}>

                <View style={styles.btn2View}>
                <ConcernEnquiryIcon width={25} height={25} style={styles.icon}/>
                <Text style={styles.text3}>Concerns</Text>
                </View>
                    
            </TouchableOpacity>
        </View>


      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      // flex:1,
      width:"100%",
      // backgroundColor:"aqua",
      // marginBottom:50
  
    },
    mainHeaderContainer:{
      // flex:1,
      width:"90%",
      marginTop:15,
      marginBottom:15,
      // backgroundColor:"yellow",
      alignSelf:"center"
    },
    text1:{
      color:"black",
      fontSize:27,
      // fontWeight:"700"
      fontFamily:"Mulish-Bold"
    },
    text2:{
      color:"#5b5c60",
      fontSize:20,
      // fontWeight:"500",
      fontFamily:"Mulish-Regular",
      paddingLeft:5


    },
    text3:{
      color:"#03195a",
      fontSize:20,
      fontFamily:"Mulish-SemiBold",
      paddingLeft:5

      
    },
    headerOptions:{
      width:"100%",
      backgroundColor:"#ebecf0",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
      marginTop:25,
      borderRadius:10,
      paddingTop:5,
      paddingBottom:5

    },
    btn1:{
      // backgroundColor:"red",
      width:"100%",
      paddingTop:15,
      paddingBottom:15,
      paddingRight:15,
      paddingLeft:15,
      borderRadius:10
    },
    btn2:{
      backgroundColor:"white",
      width:"100%",
      paddingTop:15,
      paddingBottom:15,
      paddingRight:40,
      paddingLeft:40,
      borderRadius:10
    },
    btn1View:{
      width:"100%",
      // backgroundColor:"red",
      flexDirection:"row",
      alignItems:"center"
    },
    btn2View:{
      width:"100%",
      // backgroundColor:"white",
      flexDirection:"row",
      alignItems:"center",
      width:"100%",
    },
    icon:{
      // marginRight:2
      // alignSelf:"flex-end"
      fontWeight:"700",
    }
  })

export default EnquiresHeader