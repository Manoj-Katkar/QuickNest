import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Image } from '../../../constant/images'

const TradeMark = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>TradeMark</Text> */}
        {/* Here I have to render the image */}

        <FastImage
          source={Image.tradeMark}
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
        
        
    },
    text:{
        paddingLeft:28,
        fontSize:25,
        color:"black",
        fontWeight:"bold"
    },
    image:{
        // backgroundColor:"red",
        width:300,
        height:200,
        alignSelf:"center",
        marginTop:20,
        // marginBottom:20,
    },

})

export default TradeMark