import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Image } from '../../../constant/images'

const Protect = () => {
  return (
    <View style={styles.container}>
      <Text>Protect</Text>

      <View>
        <Text>Here to protect, Here to serve</Text>
      </View>


      <View>
        {/* Here I have to render the image */}
        <FastImage
          source={Image.protectImage}

          style={styles.image}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"aqua",
        marginTop:25,
    },
    image:{
      height:100,
      width:100
    }
})

export default Protect