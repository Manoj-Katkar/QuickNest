import React from 'react';
import BellIcon from '../../../../assets/icons/BellIcon';
import NavLines from '../../../../assets/icons/NavLines';
import HelloIcon from '../../../../assets/icons/HelloIcon';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = ({nav}) => {

  return (
    <View style={styles.container}>
      <View style={styles.helloContainer}>
        <View style={styles.lLogo}>
          <HelloIcon     width={75} height={75}/>
        </View>
        <View style={styles.helloMessage}>
          <Text style={styles.helloText1}>Hello Luffy!</Text>
          <Text style={styles.helloText2}>Hope you are safe</Text>
        </View>
      </View>

      <View style={styles.bellDrawerNav}>
        <BellIcon  width={40} height={40}/>
        {/* Now to implement the drawer Navigation I have to create the one Component which will return the Drawer Navigation  */}
        <TouchableOpacity onPress={()=>nav?.openDrawer()}>
          <NavLines width={40} height={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //for main parent do not give the flex : 1 then it will take the entire width also height 
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,
    backgroundColor: '#fafafa',
    
  },
  helloContainer:{
    flexDirection:"row",
    justifyContent:"space-evenlly",
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '70%',                     //Arrange the width how much each child should take 
    height: 80, // Set height (optional)
    
  },
  bellDrawerNav:{

    flexDirection:"row",
    justifyContent:"space-around",
    alignItems: 'center',
    // backgroundColor: 'magenta',
    height: 80, // Set height (optional)
    width: '30%',

  },
  lLogo:{
    margin:15
  },
  helloMessage:{
    flex:1,
    justifyContent:"space-evenlly",
    // backgroundColor: 'yellow',
  },
  helloText1:{
    fontSize:25,
    fontWeight:"bold",
    fontFamily:"Mulish-Bold", //the way to use font style 
    color:"black"
  },
  helloText2:{
    fontSize:15,
    fontWeight:"500",
    paddingTop:5,
    color:"black"
  },
  bell1:{
    fontSize:30
  }
});

export default Header;
