import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/header-comp';

const PrivacyPolicy = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <CustomHeader headerText="Privacy Policy" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
export default PrivacyPolicy;
