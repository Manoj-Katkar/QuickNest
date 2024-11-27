import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Image} from '../src/constant/images';
import CrossIcon from '../assets/icons/CrossIcon';
import UserImageIcon from '../assets/icons/UserImageIcon';
import SubscriptionIcon from '../assets/icons/SubscriptionIcon';
import DrawerNextIcon from '../assets/icons/DrawerNextIcon';
import DrawerVerificationIcon from '../assets/icons/DrawerVerificationIcon';
import LegalIcon from '../assets/icons/LegalIcon';
import TransactionIcon from '../assets/icons/TransactionIcon';
import ContactIcon from '../assets/icons/ContactIcon';
import DrawerAboutUsIcon from '../assets/icons/DrawerAboutUsIcon';
import DeleteIcon from '../assets/icons/DeleteIcon';
import LogoutIcon from '../assets/icons/LogoutIcon';

const {width, height} = Dimensions.get('window');

const UserUI = ({props}) => {
  // console.log(props);

  const {navigation} = props;

  // I am creating the one function that will take the value on which screen to redirect and it will redirect the user to that particular Scren
  const reDirectScreen = screenName => {
    navigation.navigate(`${screenName}`);
  };

  return (
    <ImageBackground
      source={Image.backgroundDrawerImage} // Replace with your image URL or local path
      style={styles.backgroundImage}
      resizeMode="stretch" // Optional: 'cover', 'contain', 'stretch', 'repeat', 'center'
    >
      <View style={styles.overlay}>
        {/*  1st logo username and details*/}

        <View style={styles.parentContainer}>
          <View style={styles.childContainer1}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                // console.log("close the drawerr!!!!!!!!!!!!!!!!!! ");
                // navigation.navigate('Home');
                reDirectScreen('Home');
              }}>
              <CrossIcon width={35} height={35} />
            </TouchableOpacity>
          </View>

          <View style={styles.childContainer2}>
            <View style={styles.subChild1}>
              <TouchableOpacity>
                <UserImageIcon width={90} height={90} />
              </TouchableOpacity>
            </View>

            <View style={styles.subChild2}>
              <Text style={styles.name}>Monkey D.Luffy</Text>
              <Text style={styles.phoneNo}>+1 234567890</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.text3}>Edit profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horizontalLine} />
        </View>

        {/* Now the navigation vala part  */}

        <View style={styles.labelContainer}>
          <View style={styles.subContainer1}>
            <SubscriptionIcon width={30} height={30} />
            <Text style={styles.labelText}>Subscription</Text>
          </View>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // navigation.navigate('Subscription');

              reDirectScreen('Subscription');
            }}>
            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 2nd  */}

        <View style={styles.labelContainer}>
          <View style={styles.subContainer1}>
            <DrawerVerificationIcon width={30} height={30} />
            <Text style={styles.labelText}>Verification</Text>
          </View>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // navigation.navigate('Subscription');

              reDirectScreen('Verification');
            }}>
            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 3rd */}

        <View style={styles.labelContainer}>
          <View style={styles.subContainer1}>
            <LegalIcon width={30} height={30} />
            <Text style={styles.labelText}>Legal documents</Text>
          </View>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // navigation.navigate('Subscription');

              reDirectScreen('LegalDocuments');
            }}>
            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 4th  */}

        <View style={styles.labelContainer}>
          <View style={styles.subContainer1}>
            <TransactionIcon width={30} height={30} />
            <Text style={styles.labelText}>Transaction history</Text>
          </View>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // navigation.navigate('Subscription');

              reDirectScreen('TransactionHistory');
            }}>
            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 5th  */}

        <View style={styles.labelContainer}>
          <View style={styles.subContainer1}>
            <ContactIcon width={30} height={30} />
            <Text style={styles.labelText}>Contact us</Text>
          </View>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // navigation.navigate('Subscription');

              reDirectScreen('ContactUs');
            }}>
            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 6 th  */}

        <View style={styles.labelContainer}>
          <View style={styles.subContainer1}>
            <DrawerAboutUsIcon width={30} height={30} />
            <Text style={styles.labelText}>About us</Text>
          </View>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // navigation.navigate('Subscription');

              reDirectScreen('AboutUs');
            }}>
            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 7 th  */}

        <View style={styles.labelContainer}>
          <View style={styles.subContainer1}>
            <DeleteIcon width={30} height={30} />
            <Text style={styles.deleteText}>Delete account</Text>
          </View>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // navigation.navigate('Subscription');

              reDirectScreen('DeleteAccount');
            }}>
            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>

        {/* 8 th  */}

        <View style={styles.labelContainer}>
          <View style={styles.subContainer1}>
            <LogoutIcon width={30} height={30} />
            <Text style={styles.labelText}>Logout</Text>
          </View>

          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              // navigation.navigate('Subscription');

              reDirectScreen('Logout');
            }}>
            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.version}>
        <Text style={styles.versionText}>v 0.1</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center', // Align content vertically
    alignItems: 'center', // Align content horizontally
  },
  overlay: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Semi-transparent overlay
    // padding: 20,
    // borderRadius: 10,
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // backgroundColor: 'black',
    marginBottom: 16,
    paddingTop: 10,
    paddingBottom: 5,
  },
  labelText: {
    fontSize: 18,
    color: '#dfe1e9',
    fontFamily: 'Mulish-Medium',
    paddingLeft: 19,
  },
  subContainer1: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"yellow",
    paddingLeft: 20,
  },
  subContainer2: {
    width: '20%',
    paddingRight: 10,
    // backgroundColor:"maroon",
  },
  deleteText: {
    fontSize: 18,
    fontFamily: 'Mulish-Medium',
    color: 'red',
    paddingLeft: 19,
  },
  nextIcon: {
    alignSelf: 'flex-end',
    color: 'white',
    // paddingLeft:10
  },
  button: {
    width: '83%',
    backgroundColor: 'transparent',
    paddingTop: 10,

    paddingBottom: 10,
    paddingLeft: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#4d8dc5',
  },
  text3: {
    color: '#4f82be',
    fontSize: 16,
    // fontWeight:"400"
    fontFamily: 'Mulish-Medium',
  },
  parentContainer: {
    width: '100%',
    // backgroundColor:"black",
    // alignSelf:"center",
    marginBottom: 10,
    marginTop: 20,
  },
  childContainer1: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // paddingRight:10
    padding: 10,
    // backgroundColor: 'red',
    marginTop: 10,
  },
  childContainer2: {
    width: '90%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    // alignSelf:"center",
    // justifyContent:"space-evenly",
    // paddingTop: 15,
    // backgroundColor: 'black',
    // alignSelf:"flex-start"
  },
  subChild1: {
    // backgroundColor: 'red',
    paddingLeft: 15,
  },
  subChild2: {
    // backgroundColor: 'aqua',
    paddingLeft: 25,
  },
  name: {
    fontSize: 22,
    // fontWeight:"500",
    fontFamily: 'Mulish-Bold',
    color: '#e8ebfc',
    marginBottom: 10,
  },
  phoneNo: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Mulish-Regular',
    color: '#b5b8d2',
  },
  version: {
    // flexDirection:"row",
    // backgroundColor:"red",
    // alignSelf:"flex-end"
    marginTop: 88,
  },
  versionText: {
    color: 'gray',
    fontSize: 15,
  },
  btn: {
    width: 50,
    // backgroundColor:"yellow"
  },
  btn2: {
    // flex:1
    width: '100%',
  },
  horizontalLine: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#3e5485',
    // marginVertical: 10,
    marginTop: 15,
  },
});

export default UserUI;
