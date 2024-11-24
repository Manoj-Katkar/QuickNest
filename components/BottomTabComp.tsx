import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {Image} from '../src/constant/images';
import HomeIcon from '../assets/icons/HomeIcon';
import ConcernIcon from '../assets/icons/ConcernIcon';
import MemberIcon from '../assets/icons/MemberIcon';
import EnquiryIcon from '../assets/icons/EnquiryIcon';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomTabComp = () => {

    let navigation = useNavigation();

    const handlePressNavigate = (pageName) => {
        navigation.navigate(`${pageName}`);
    }

  return (
    
      <ImageBackground
        source={Image.tabBackGroundImage} // Replace with your image URL or local path
        style={styles.backgroundImage}
        resizeMode="cover" // Optional: 'cover', 'contain', 'stretch', 'repeat', 'center'
      >
        <View style={styles.mainParent}>

        <TouchableOpacity onPress={() => {
            handlePressNavigate('Home');
        }}>
            <View style={styles.child1}>
                <HomeIcon width={50} height={50}  style={styles.icons} />
                <Text style={styles.text}>Home</Text>
            </View>
        </TouchableOpacity>  

        
        <TouchableOpacity onPress={() => {
            handlePressNavigate('Concern');
        }}>
            <View style={styles.child2}>
                <ConcernIcon width={30} height={30} style={styles.icons}/>
                <Text style={styles.text2}>Concern</Text>
            </View>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => {
            handlePressNavigate('Member');
        }}>
            <View style={styles.child3}>
                <MemberIcon width={50} height={50} style={styles.icons}/>
                <Text style={styles.text}>Member</Text>
            </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {
            handlePressNavigate('Enquiry');
        }}>
            <View style={styles.child4}>
                <EnquiryIcon width={50} height={50} style={styles.icons}/>
                <Text style={styles.text}>Enquiry</Text>
            </View>
        </TouchableOpacity>

        </View>

        
        <FastImage

            source={Image.tabNavigationIcon}

            resizeMode='contain'

            // style={styles.image}
            style={{ width: 75, height: 75 , position:"absolute" , left:"40.5%" , bottom:53}} // Adjust dimensions as needed
            />
        
      </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // height: 100,
    
    // justifyContent:"center",
    // alignItems:"center",
    // backgroundColor: 'tranparent',
    // zIndex:-1
  },
  backgroundImage: {
    width: '100%',
    height: 80,
    // alignSelf:"flex-end"
    // backgroundColor:"yellow",
    
  },
  mainParent: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // backgroundColor:"red",
    // marginTop:19,
    // zIndex:+1,

  },
  child1: {
    // backgroundColor:"red",
    alignSelf:'center',
    marginLeft:15,

  },
  child2: {
    // backgroundColor:"red",
    alignSelf:'center',
    marginLeft:35,
    marginTop:10
   
  },
  child3: {
    // paddingLeft:25
   
    // backgroundColor:"red",
    alignSelf:'center',
    marginLeft:100
  },
  child4: {
    // backgroundColor:"red",
    alignSelf:'center',
    marginLeft:30
  },
  icons: {
    alignSelf: 'center',
    marginBottom:0,
    paddingBottom:0

  },
  text: {
    color: 'black',
    fontSize: 12,
    alignSelf:"center"
  },
  text2:{
    color: 'black',
    fontSize: 12,
    alignSelf:"center",
    marginTop:13
  }
});

export default BottomTabComp;
