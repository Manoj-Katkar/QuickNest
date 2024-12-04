import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
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

      <FlatList
        data={[
          {id: '1', Icon: MarieIcon},
          {id: '2', Icon: MarcusIcon},
          {id: '3', Icon: JakeIcon},
          {id: '4', Icon: IsabellIcon},
          {id: '5', Icon: MarieIcon},
          {id: '6', Icon: MarcusIcon},
          {id: '7', Icon: JakeIcon},
          {id: '8', Icon: IsabellIcon},
          {id: '9', Icon: MarieIcon},
          {id: '10', Icon: MarcusIcon},
          {id: '11', Icon: JakeIcon},
          {id: '12', Icon: IsabellIcon},
          {id: '13', Icon: MarcusIcon},
          {id: '14', Icon: JakeIcon},
          {id: '15', Icon: IsabellIcon},
          {id: '16', Icon: MarieIcon},
          {id: '17', Icon: MarcusIcon},
          {id: '18', Icon: JakeIcon},
          {id: '19', Icon: IsabellIcon},
        ]} // The data for the list
        keyExtractor={item => item.id} // Unique key for each item
        horizontal // Horizontal layout
        contentContainerStyle={styles.subContainer2} // Apply the same styles as the ScrollView container  , Styles the scrollable inner content of the list
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
        renderItem={({item}) => {
          const IconComponent = item.Icon; // Access the correct icon component
          return <IconComponent style={styles.contacts} />; // Render the icon
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    marginTop: 25,
  },
  subContainer1: {
    paddingLeft: 20,
  },
  subContainer2: {
    flexDirection: 'row',
    marginTop: 10,
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    color: 'black',
  },
  contacts: {
    marginLeft: 20,
  },
});

export default Contacts;
