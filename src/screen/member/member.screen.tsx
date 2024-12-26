import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import UserUI from '../../components/user-ui';

const {width, height} = Dimensions.get('window');

const Member = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Member</Text>
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

export default Member;
