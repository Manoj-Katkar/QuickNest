import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MarieIcon from '../../../../assets/icons/MarieIcon';
import MarcusIcon from '../../../../assets/icons/MarcusIcon';
import JakeIcon from '../../../../assets/icons/JakeIcon';
import IsabellIcon from '../../../../assets/icons/IsabellIcon';

const Contacts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>Household Member Contacts</Text>
      </View>

      <ScrollView horizontal style={styles.subContainer2}>
        <MarieIcon style={styles.contacts} />
        <MarcusIcon style={styles.contacts} />
        <JakeIcon style={styles.contacts} />
        <IsabellIcon style={styles.contacts} />
        <MarieIcon style={styles.contacts} />
        <MarcusIcon style={styles.contacts} />
        <JakeIcon style={styles.contacts} />
        <IsabellIcon style={styles.contacts} />
        <MarieIcon style={styles.contacts} />
        <MarcusIcon style={styles.contacts} />
        <JakeIcon style={styles.contacts} />
        <IsabellIcon style={styles.contacts} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    marginTop: 25,

    // alignSelf:"center"
  },
  subContainer1: {
    // backgroundColor:"yellow",
    paddingLeft: 20,
  },
  subContainer2: {
    flexDirection: 'row',
    // justifyContent:"space-evenly",
    // backgroundColor:"aqua",
    marginTop: 10,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    // fontWeight:"600",
    color: 'black',
  },
  contacts: {
    marginLeft: 20,
  },
});

export default Contacts;
