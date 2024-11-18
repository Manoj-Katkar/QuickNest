import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TransactionHistory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Transaction History</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E8F6F3', // Cool light greenish background
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#34495E', // Cool dark greyish-blue text color
    },
  });

export default TransactionHistory