import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import PreviousIcon from '../../assets/icons/PreviousIcon';

const CustomHeader = (props: any) => {
  const {headerText, navigation} = props;

  const handlePress = () => {
    if (navigation?.goBack) {
      navigation.goBack();
    } else {
      console.log('Navigation object is not available');
    }
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handlePress}>
        <PreviousIcon width={30} height={30} />
      </TouchableOpacity>

      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor:"yellow",
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 12,
    marginLeft: 10,
    paddingTop: 30,
  },
  headerText: {
    color: '#2B2B2B',
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    marginLeft: 10,
  },
});

export default CustomHeader;
