import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Concern = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Concern</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default Concern;
