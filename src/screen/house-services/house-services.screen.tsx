import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { Image } from '../../constant/images';


const {width , height} = Dimensions.get("window");

const HouseServices = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>House-Services</Text> */}


       
          
        <FastImage
                  source={Image.houseBanner}
                  
                  // resizeMode='cover'

                  style={styles.image}

        />

        

          
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fafafa', // Cool light greenish background
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#34495E', // Cool dark greyish-blue text color
    },
    image:{
        backgroundColor:"yellow",
        width:width * 0.8,
        height:140,
        // alignSelf:"center",
   
        marginTop:15

    },
  });

export default HouseServices