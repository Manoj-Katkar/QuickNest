import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useCallback} from 'react';
import {Image} from '../constant/images';
import CrossIcon from '../../assets/icons/CrossIcon';
import UserImageIcon from '../../assets/icons/UserImageIcon';
import SubscriptionIcon from '../../assets/icons/SubscriptionIcon';
import DrawerNextIcon from '../../assets/icons/DrawerNextIcon';
import DrawerVerificationIcon from '../../assets/icons/DrawerVerificationIcon';
import LegalIcon from '../../assets/icons/LegalIcon';
import TransactionIcon from '../../assets/icons/TransactionIcon';
import ContactIcon from '../../assets/icons/ContactIcon';
import DrawerAboutUsIcon from '../../assets/icons/DrawerAboutUsIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import LogoutIcon from '../../assets/icons/LogoutIcon';

const {width, height} = Dimensions.get('window');

// now for rendering the All subscreen Ui I will create the one componenet that will render it and then using the flatList I will render the Ui because it will become the more optimized

const navigationItems = [
  {icon: SubscriptionIcon, label: 'Subscription', screenName: 'Subscription'},
  {
    icon: DrawerVerificationIcon,
    label: 'Verification',
    screenName: 'Verification',
  },
  {icon: LegalIcon, label: 'Legal documents', screenName: 'LegalDocuments'},
  {
    icon: TransactionIcon,
    label: 'Transaction history',
    screenName: 'TransactionHistory',
  },
  {icon: ContactIcon, label: 'Contact us', screenName: 'ContactUs'},
  // {icon: DrawerAboutUsIcon, label: 'About us', screenName: 'AboutUs'},   //^ I have added the setting screnn instead
  {icon: DrawerAboutUsIcon, label: 'Setting', screenName: 'Setting'},
  {
    icon: DeleteIcon,
    label: 'Delete account',
    screenName: 'DeleteAccount',
    isDelete: true,
  },
  {icon: LogoutIcon, label: 'Logout', screenName: 'Logout'},
];

const UserUI = ({props}: any) => {
  // console.log(props);

  const {navigation} = props;

  // I am creating the one function that will take the value on which screen to redirect and it will redirect the user to that particular Scren
  const reDirectScreen = (screenName: string) => {
    navigation.navigate(`${screenName}`);
  };

  // ^taking the one function that will return the each item list UI

  const renderItem = useCallback(
    ({item}: any) => {
      const IconComponent = item.icon;

      return (
        <TouchableOpacity onPress={() => reDirectScreen(item.screenName)}>
          <View style={styles.labelContainer}>
            <View style={styles.subContainer1}>
              <IconComponent width={30} height={30} />
              <Text
                style={item.isDelete ? styles.deleteText : styles.labelText}>
                {item.label}
              </Text>
            </View>

            <View style={styles.subContainer2}>
              <DrawerNextIcon style={styles.nextIcon} width={30} height={30} />
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [navigationItems],
  );

  return (
    <>
      {/* <StatusBar backgroundColor="#294090" barStyle="light-content" /> */}
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
                <UserImageIcon width={90} height={90} />
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

          {/* now here I will implement the logic using the flatList  */}
          <FlatList
            data={navigationItems}
            keyExtractor={item => item.screenName}
            renderItem={renderItem}
          />
        </View>

        <View style={styles.version}>
          <Text style={styles.versionText}>v 0.1</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center', // Align content horizontally
  },
  overlay: {
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
    marginTop: 5,
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
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 3,
  },
  versionText: {
    color: 'gray',
    fontSize: 15,
  },
  btn: {
    width: 50,
  },

  horizontalLine: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#3e5485',
    marginTop: 15,
  },
});

export default UserUI;
