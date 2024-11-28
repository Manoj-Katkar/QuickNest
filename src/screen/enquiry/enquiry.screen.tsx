import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import EnquiresHeader from './components/EnquiresHeader';
import SearchFilter from './components/SearchFilter';
import Cards from './components/Cards';

const Enquiry = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>enquiry</Text> */}
      <EnquiresHeader navigation={navigation} />
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
