import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DrawerNextIcon from '../../../../assets/icons/DrawerNextIcon'
import RecordingIcon from '../../../../assets/icons/RecordingIcon'
import CalenderIcon from '../../../../assets/icons/CalenderIcon'

const Cards = ({navigation}) => {

  const handlePress = () => {
    navigation.navigate('Details');
  }


  return (
    <ScrollView style={styles.container}>
      
      {/* 1st ticket */}

     

      <View style={styles.subContainer1}>

        <View style={styles.sub1Child1}>
            <Text style={styles.text1}>#EN20001</Text>
            <Text style={styles.text2}>Resolved</Text>
        </View>

        <View style={styles.sub1Child2}>
            <View style={styles.calenderView}>
              <CalenderIcon width={26} height={26}/>
              <Text style={styles.text3}>6th Feb 2024</Text>
            </View>
            
            <Text style={styles.text4}>“Kids are kicking bins over in the alley at the {"\n"}top of the road, causing a lot of noise and me...</Text>
        </View>

        <View style={styles.horizontalLine} />


        <View style={styles.sub1Child3}>
            <TouchableOpacity style={styles.btn1}>
              <View style={styles.child3View}>
                <RecordingIcon width={26} height={26}/>
                <Text style={styles.text5}>Play recording</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} onPress={handlePress}>
                <DrawerNextIcon width={26} height={26}/>
            </TouchableOpacity>
        </View>
      </View>

    


      {/* 2nd ticket */}


      

      <View style={styles.subContainer1}>

        <View style={styles.sub1Child1}>
            <Text style={styles.text1}>#EN20001</Text>
            <Text style={styles.text2}>Resolved</Text>
        </View>

        <View style={styles.sub1Child2}>
            <View style={styles.calenderView}>
              <CalenderIcon width={26} height={26}/>
              <Text style={styles.text3}>6th Feb 2024</Text>
            </View>
            
            <Text style={styles.text4}>“Kids are kicking bins over in the alley at the {"\n"}top of the road, causing a lot of noise and me...</Text>
        </View>

        <View style={styles.horizontalLine} />


        <View style={styles.sub1Child3}>
            <TouchableOpacity style={styles.btn1}>
              <View style={styles.child3View}>
                <RecordingIcon width={26} height={26}/>
                <Text style={styles.text5}>Play recording</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} onPress={handlePress}>
                <DrawerNextIcon width={26} height={26}/>
            </TouchableOpacity>
        </View>
      </View>
      


      {/* 3rd ticket */}

    
      <View style={styles.subContainer1}>

        <View style={styles.sub1Child1}>
            <Text style={styles.text1}>#EN20001</Text>
            <Text style={styles.text2}>Resolved</Text>
        </View>

        <View style={styles.sub1Child2}>
            <View style={styles.calenderView}>
              <CalenderIcon width={26} height={26}/>
              <Text style={styles.text3}>6th Feb 2024</Text>
            </View>
            
            <Text style={styles.text4}>“Kids are kicking bins over in the alley at the {"\n"}top of the road, causing a lot of noise and me...</Text>
        </View>

        <View style={styles.horizontalLine} />


        <View style={styles.sub1Child3}>
            <TouchableOpacity style={styles.btn1}>
              <View style={styles.child3View}>
                <RecordingIcon width={26} height={26}/>
                <Text style={styles.text5}>Play recording</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} onPress={handlePress}>
                <DrawerNextIcon width={26} height={26}/>
            </TouchableOpacity>
        </View>
      </View>
      

      {/* 4th ticket */}

   

      <View style={styles.subContainer1}>

        <View style={styles.sub1Child1}>
            <Text style={styles.text1}>#EN20001</Text>
            <Text style={styles.text2}>Resolved</Text>
        </View>

        <View style={styles.sub1Child2}>
            <View style={styles.calenderView}>
              <CalenderIcon width={26} height={26}/>
              <Text style={styles.text3}>6th Feb 2024</Text>
            </View>
            
            <Text style={styles.text4}>“Kids are kicking bins over in the alley at the {"\n"}top of the road, causing a lot of noise and me...</Text>
        </View>

        <View style={styles.horizontalLine} />


        <View style={styles.sub1Child3}>
            <TouchableOpacity style={styles.btn1}>
              <View style={styles.child3View}>
                <RecordingIcon width={26} height={26}/>
                <Text style={styles.text5}>Play recording</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} onPress={handlePress}>
                <DrawerNextIcon width={26} height={26}/>
            </TouchableOpacity>
        </View>
      </View>
      




    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
      // flex:1,
      width:"100%",
      backgroundColor:"#f7f7f7"
  
    },
    text1:{
      color:"black",
      fontSize:18,
      fontWeight:"500",
      backgroundColor:"#ebecf0",
      padding:5,
      paddingLeft:8,
      paddingRight:8,
      borderRadius:10
    },
    text2:{
      color:"#5fba86",
      fontSize:18,
      fontWeight:"500",
      backgroundColor:"#ebecf0",
      padding:5,
      paddingLeft:8,
      paddingRight:8,
      borderRadius:10

    },
    text3:{
      color:"black",
      fontSize:18,
      paddingLeft:10,
      fontWeight:"500"
    },
    text4:{
      color:"black",
      fontSize:15.5,
      marginBottom:10
    },
    text5:{
      color:"black",
      fontSize:18,
      fontWeight:"600",
      paddingLeft:5
    },
    subContainer1:{
      backgroundColor:"white",
      width:"90%",
      alignSelf:"center",
      padding:10,
      marginTop:10,
      borderRadius:10,

      // shadow for each ticket 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      
      elevation: 12,
      marginBottom:15


    },
    sub1Child1:{
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"white",
      marginBottom:5
    },
    sub1Child2:{
      backgroundColor:"white",
      marginTop:10,
  
    },
    sub1Child3:{
      width:"100%",
      // backgroundColor:"magenta",
      flexDirection:"row",
      alignItems:"center"
      // justifyContent:"space-between",
    },
    child3View:{
      flexDirection:"row",
      // alignItems:"center"
    },
    btn1:{
      // width:"100%",
      // height:50,
      backgroundColor:"#ebecf0",
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:60,
      paddingRight:60,
      borderRadius:10,
      marginRight:5
    },
    btn2:{
      backgroundColor:"#011e62",
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:15,
      paddingRight:15,
      borderRadius:50
    },
    calenderView:{
      flexDirection:"row",
      alignItems:"center",
      // backgroundColor:"red"
      marginBottom:15
    },
    horizontalLine:{
      width: '100%',
      height: 1,
      backgroundColor: 'gray',
      marginVertical: 10,
      alignSelf:"center"
    }
  })

export default Cards