import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HouseHoldMember = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HouseHold Member Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F6F3',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E',
  },
});

export default HouseHoldMember;
