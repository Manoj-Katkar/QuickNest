import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageBackgroundComponent,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import UserUI from '../../components/UserUI';

const {width, height} = Dimensions.get('window');

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
