import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const Concern = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 35}}>Concern Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default Concern;
