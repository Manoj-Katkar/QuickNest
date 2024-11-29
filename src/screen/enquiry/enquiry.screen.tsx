import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import EnquiresUI from './components/EnquiresUI';

const Enquiry = ({navigation}) => {
  return (
    <View style={styles.container}>
      <EnquiresUI navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 30,
  },
});

export default Enquiry;
