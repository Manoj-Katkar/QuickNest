import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import VerificationIcon from '../../../../assets/icons/VerificationIcon';
import NextIcon from '../../../../assets/icons/NextIcon';
import Percentage from '../../../../assets/icons/Percentage';
import ProgressBar from '../../../../assets/icons/ProgressBar';


const Verification = () => {
  return (
    <View style={styles.superParent}>
    
    <View style={styles.container}>
      
      <View style={styles.subContainer1}>

        <View style={styles.subContainer1_icon}>
          <VerificationIcon width={30} height={30}  style={styles.actual_icon}/>
        </View>

        <View>
          <Text style={styles.text1}>Complete Verification</Text>
          <Text style={styles.text2}>Your verification progress</Text>
        </View>


      </View>




      <View style={styles.subContainer2}>

        <TouchableOpacity style={styles.btn1}>
          <NextIcon width={32} height={32} style={styles.nextIcon}/>
        </TouchableOpacity>
       
        

        <Text style={styles.percentage}>50%</Text>
      </View>


      


    </View>

    <View style={styles.progressBar}>
          <View style={styles.horizontalLine1} />
          <View style={styles.horizontalLine2} />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  superParent:{
    width: '92%',
    marginTop: 20,
    // padding:20,
    paddingBottom:20,
    paddingTop:20,
    paddingRight:15,
    borderWidth:0.5,
    borderColor:"gray",
    borderRadius:10,
    alignSelf:"center",
    backgroundColor:"white"
  },
  container: {
    //for main parent do not give the flex : 1 then it will take the entire width also height
    width: '92%',
    flexDirection: 'row',
    alignSelf:"center",
    justifyContent: 'space-between',
    
    alignItems:"center",
    // marginTop: 20,
    // // padding:20,
    // paddingBottom:20,
    // paddingTop:20,
    // paddingRight:10,
    
    // borderWidth:0.5,
    // borderColor:"gray",
    // borderRadius:10
  },
  subContainer1: {
    width: '80%',
    flexDirection: 'row',
    // backgroundColor: 'aqua',
    alignSelf:"center",
    // marginLeft:14

  },
  subContainer2: {
    width: '20%',
    // backgroundColor: 'yellow',
    // justifyContent:"center",
    alignItems:"flex-end",
    position:"relative"

  },
  subContainer1_icon: {
    marginRight: 10,
  },
  actual_icon:{
    fontWeight:"bold"
  },
  text1:{
    fontSize:22,
    paddingBottom:10,
    // fontWeight:"500",
    fontFamily:"Mulish-Bold",
    color:"black"

  },
  text2:{
    fontSize:15,
    // fontWeight:"300",
    fontFamily:"Mulish-Regular",
    color:"black",
    lineHeight:15.06

  },
  nextIcon:{
    // marginBottom:18
    // backgroundColor:"red",
    position:"absolute",
    top:-15,
    left:15,
    // bottom:"60%"
  },
  percentage:{
    fontSize:18,
    // marginTop:40,
    marginRight:10,
    fontFamily:"Mulish-SemiBold",
    color:"black",
    position:"absolute",
    top:40,
    left:44,
  },
  progressBar:{
    flexDirection:"row",
    width: '89%',
    height:10,
    alignSelf:"center",
    marginTop:15,
    borderRadius:10
  },
  horizontalLine1: {
    width: '55%',
    height: 5,
    backgroundColor: '#3db176',
    marginVertical: 5,
    alignSelf:"center",
    borderRadius:10
  },
  horizontalLine2:{
    width: '35%',
    height: 5,
    backgroundColor: '#c5e8df',
    marginVertical: 5,
    alignSelf:"center",
    // borderRadius:10
  },
  btn1:{
    width:"50%",
    height:20
  }
});

export default Verification;
