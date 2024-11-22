import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import PreviousIcon from '../../../assets/icons/PreviousIcon'
import CalenderIcon from '../../../assets/icons/CalenderIcon'
import PanicEnquiryIcon from '../../../assets/icons/PanicEnquiryIcon'
import RecordingIcon from '../../../assets/icons/RecordingIcon'
import PlayIcon from '../../../assets/icons/PlayIcon'
import ImageIcon from '../../../assets/icons/ImageIcon'
import EyeIcon from '../../../assets/icons/EyeIcon'
import IIcon from '../../../assets/icons/IIcon'

const Details = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('Enquiry');
    }
  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.text}>Details</Text> */}

     

        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handlePress}>
            <PreviousIcon width={40} height={40}/>
            </TouchableOpacity>
            
            <Text style={styles.headerText}>Details</Text>
        </View>


        <View style={styles.subContainer}>

            <View style={styles.child1}>
                <Text  style={styles.text1}>Enquiry  #20001</Text>
                <Text style={styles.text2}>In progress</Text>
            </View>

            <Text style={styles.text3}>Suspicious Activity in Neighborhood</Text>

            <View style={styles.child2}>
                <CalenderIcon width={26} height={26}/>
                <Text style={styles.text4}>6th Feb 2024</Text>
            </View>


            <View style={styles.horizontalLine} />

            <View style={styles.child3}>
                <IIcon width={26} height={26}/>
                <Text style={styles.text5}>Admin response</Text>
            </View>

            <View style={styles.child4}>
                <Text style={styles.text6}>We have analyzed your recording and {"\n"}dispatched the team accordingly. They reach {"\n"}asap! stay calm</Text>
            </View>

            <View style={styles.child5}>
                <Text style={styles.text7}>Description</Text>
                <Text style={styles.text8}>Lorem ipsum dolor sit amet, consectetur adipiscing {"\n"}elit, sed do eiusmod tempor incididunt ut labore et {"\n"}dolore magna aliqua. Ut enim ad minim veniam, {"\n"}quis nostrud exercitation ullamco </Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.child6}>

                <Text style={styles.text9}>Attachments</Text>

                <View style={styles.child6_1}>
                    <View style={styles.child6_1_1}>
                        <RecordingIcon width={30} height={30}/>
                        <Text style={styles.text10}>Audio recording</Text>
                    </View>
                    <PlayIcon width={30} height={30}/>
                </View>


                <View style={styles.child6_2}>
                    <View style={styles.child6_2_1}>
                        <ImageIcon width={30} height={30}/>
                        <Text style={styles.text11}>Image234</Text>
                    </View>
                    <EyeIcon width={30} height={30}/>
                </View>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.child7}>
                <Text style={styles.text12}>Assigned response team</Text>
                <Text style={styles.text13}>Team Lead - Sarah Johnson, Emergency Response {"\n"}Coordinator</Text>
            </View>

            <View style={styles.child8}>
                <Text style={styles.text14}>Phone - +44 987 654 3210</Text>
            </View>
        </View>

    
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fafafa"
    },
    text:{
        fontSize:30,
        color:"black"
    },
    headerContainer:{
        // backgroundColor:"yellow",
        width:"95%",
        alignSelf:"center",
        flexDirection:"row",
        alignItems:"center",
        marginTop:15,
        marginBottom:10
    },
    headerText:{
        color:"black",
        fontSize:25,
        fontWeight:"700",
        marginLeft:10
    },
    subContainer:{
        width:"90%",
        alignSelf:"center",
    },
    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 20,
    },
    text1:{
        color:"black",
        fontSize:23,
        fontWeight:"500"
    },
    text2:{
        color:"#efaa65",
        fontSize:15,
        fontWeight:"500",
        marginRight:10 ,
        backgroundColor:"#f8f3ef",
        padding:7,
        borderRadius:10

    },
    text3:{
        color:"black",
        fontSize:20,
        // backgroundColor:"red"
        marginBottom:10,
        fontWeight:"400"
    },
    text4:{
        color:"black",
        fontSize:20,
        marginLeft:8,
    },
    text5:{
        color:"#1063dd",
        fontSize:20,
        marginLeft:8,
        fontWeight:"400"
    },
    text6:{
        color:"#6a6a6a",
        fontSize:16,
        lineHeight: 18,
    },
    text7:{
        color:"black",
        fontSize:22,
        marginBottom:8
    },
    text8:{
        color:"#6a6a6a",
        fontSize:15,
        lineHeight: 18,
    },
    text9:{
        color:"black",
        fontSize:22,
        marginBottom:15
    },
    text10:{
        color:"black",
        fontSize:18,
        fontWeight:"500",
        marginLeft:10
    },
    text11:{
        color:"black",
        fontSize:18,
        fontWeight:"500",
        marginLeft:10
    },
    text12:{
        color:"black",
        fontSize:22,
        marginBottom:5
    },
    text13:{
        color:"black",
        fontSize:15,
        marginBottom:5,
        lineHeight: 20,
    },
    text14:{
        color:"black",
        fontSize:20
    },
    child1:{
        // backgroundColor:"magenta",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingBottom:15,
        paddingTop:10,
    },
    child2:{
        // backgroundColor:"magenta",
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5
    },
    child3:{
        // backgroundColor:"magenta",
        flexDirection:"row",
        alignItems:"center",
        marginBottom:8
    },
    child4:{
        // backgroundColor:"magenta",
        width:"100%",
        alignSelf:"center",
        padding:10,
        paddingLeft:15,
        paddingTop:15,
        paddingBottom:15,
        borderWidth:0.5,
        borderColor:"gray",
        borderRadius:10,

        // shadow 
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
        marginBottom:20,
        marginTop:10
    },
    child5:{
        // backgroundColor:"magenta"
    },
    child6:{
        // backgroundColor:"magenta"
    },
    child6_1:{
        // backgroundColor:"yellow",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:15
    },
    child6_2:{
        // backgroundColor:"green",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    child6_1_1:{
        // backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center"
    },
    child6_2_1:{
        // backgroundColor:"pink",
        flexDirection:"row",
        alignItems:"center"
    },
    child7:{
        // backgroundColor:"magenta",
        marginBottom:10
    },
    child8:{
        // backgroundColor:"magenta",
    }
  })

export default Details