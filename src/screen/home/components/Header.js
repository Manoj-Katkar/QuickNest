import React from 'react';
import BellIcon from '../../../../assets/icons/BellIcon';
import NavLines from '../../../../assets/icons/NavLines';
import HelloIcon from '../../../../assets/icons/HelloIcon';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = ({nav}) => {
  return (
    <View style={styles.container}>
      <View style={styles.helloContainer}>
        <View style={styles.lLogo}>
          <HelloIcon width={75} height={75} />
        </View>

        <View style={styles.helloMessage}>
          <Text style={styles.helloText1}>Hello Luffy! </Text>
          <Text style={styles.helloText2}>Hope you are safe</Text>
        </View>
      </View>

      <View style={styles.bellDrawerNav}>
        <TouchableOpacity>
          <BellIcon width={32} height={32} style={styles.bellStyle} />
        </TouchableOpacity>
        {/* Now to implement the drawer Navigation I have to create the one Component which will return the Drawer Navigation  */}
        <TouchableOpacity
          onPress={() => {
            // console.log("navigation : returns the below inbuild methods " , nav);
            console.log('Drawer is opened Button is Clicked!!!!!!!!!!!');

            nav?.openDrawer();
          }}>
          <NavLines width={32} height={32} style={styles.navStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //for main parent do not give the flex : 1 then it will take the entire width also height
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    backgroundColor: '#fafafa',
  },
  helloContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenlly',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '70%', //Arrange the width how much each child should take
    height: 80, // Set height (optional)
  },
  bellDrawerNav: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    // backgroundColor: 'magenta',
    height: 80, // Set height (optional)
    width: '30%',
    alignSelf: 'center',
  },
  lLogo: {
    margin: 15,
  },
  helloMessage: {
    flex: 1,
    justifyContent: 'space-evenlly',
    // backgroundColor: 'yellow',
  },
  helloText1: {
    fontSize: 22,
    // fontWeight:"700",
    fontFamily: 'Mulish-Bold', //the way to use font style
    color: 'black',
  },
  helloText2: {
    fontSize: 15,
    // fontWeight:"500",
    fontFamily: 'Mulish-Regular',
    paddingTop: 5,
    color: 'black',
    lineHeight: 17.57,
  },
  bell1: {
    fontSize: 30,
  },
  bellStyle: {
    marginRight: 18,
  },
  navStyle: {
    marginRight: 18,
  },
});

export default Header;
