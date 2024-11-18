import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Image } from '../../../constant/images'

const CommingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comming Soon!</Text>

      
        <FastImage
            source={Image.houseBanner}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain} // or cover, depending on your needs
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        // backgroundColor:"aqua",
        // marginBottom:300,
        
    },
    text:{
        paddingLeft:28,
        fontSize:25,
        color:"black",
        fontWeight:"bold"
    },
    image:{
        // backgroundColor:"red",
        width:630,
        height:200,
        alignSelf:"center",
        marginTop:20,
        marginBottom:20,
    },

})

export default CommingSoon