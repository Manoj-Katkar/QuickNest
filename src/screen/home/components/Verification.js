import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import VerificationIcon from '../../../../assets/icons/VerificationIcon';
import NextIcon from '../../../../assets/icons/NextIcon';
import Percentage from '../../../../assets/icons/Percentage';


const Verification = () => {
  return (
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
        <NextIcon width={40} height={40} style={styles.nextIcon}/>
        <Text style={styles.percentage}>50%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //for main parent do not give the flex : 1 then it will take the entire width also height
    width: '90%',
    flexDirection: 'row',
    alignSelf:"center",
    justifyContent: 'space-between',
    
    alignItems:"center",
    marginTop: 20,
    padding:20,
    // height:100,
    backgroundColor: '#fafafa',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    
    
    elevation: 20,
    borderColor:"gray",
    borderRadius:10
  },
  subContainer1: {
    width: '80%',
    flexDirection: 'row',
    // backgroundColor: 'aqua',

  },
  subContainer2: {
    width: '20%',
    // backgroundColor: 'yellow',
    // justifyContent:"center",
    alignItems:"flex-end"

  },
  subContainer1_icon: {
    marginRight: 15,
  },
  actual_icon:{
    fontWeight:"bold"
  },
  text1:{
    fontSize:23,
    paddingBottom:15,
    fontWeight:"500",
    color:"black"

  },
  text2:{
    fontSize:18,
    fontWeight:"300",
    color:"black"

  },
  nextIcon:{
    marginBottom:18
  },
  percentage:{
    fontSize:20,
    marginTop:30,
    color:"black"
  }
});

export default Verification;
