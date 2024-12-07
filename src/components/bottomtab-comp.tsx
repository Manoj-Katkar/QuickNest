import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Image} from '../constant/images';
import HomeIcon from '../../assets/icons/HomeIcon';
import ConcernIcon from '../../assets/icons/ConcernIcon';
import MemberIcon from '../../assets/icons/MemberIcon';
import EnquiryIcon from '../../assets/icons/EnquiryIcon';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ConcernHighLight from '../../assets/icons/ConcernHighLight';
import MemberHighLight from '../../assets/icons/MemberHighLight';
import EnquiryHighLight from '../../assets/icons/EnquiryHighLight';
import HomeDark from '../../assets/icons/HomeDark';

const BottomTabComp = () => {
  let navigation = useNavigation() as any;

  const [activeIcon, setActiveIcon] = useState('Home'); //because I want the by-default the Home should be selected

  const handlePressNavigate = (pageName: string) => {
    navigation.navigate(pageName);
  };

  const changeIconAndText = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <ImageBackground
      source={Image.tabBackGroundImage} // Replace with your image URL or local path
      style={styles.backgroundImage}
      resizeMode="stretch" // Optional: 'cover', 'contain', 'stretch', 'repeat', 'center'
    >
      {/* Now properlly designing the Bottom tab Icon  */}

      <View style={styles.mainParent}>
        <View style={styles.mainChild1}>
          <TouchableOpacity
            onPress={() => {
              handlePressNavigate('Home');
              changeIconAndText('Home');
            }}>
            {/* here I have to do the conditional rendering  */}
            {activeIcon === 'Home' ? (
              <View style={styles.eachIconContainer}>
                <HomeDark width={32} height={32} />
                <Text style={styles.textActive}>Home</Text>
              </View>
            ) : (
              <View style={styles.eachIconContainer}>
                <HomeIcon width={32} height={32} />
                <Text style={styles.textInActive}>Home</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePressNavigate('Concern');
              changeIconAndText('Concern');
            }}>
            {activeIcon === 'Concern' ? (
              <View style={[styles.eachIconContainer, {paddingLeft: 20}]}>
                <ConcernHighLight width={32} height={32} />
                <Text style={styles.textActive}>Concern</Text>
              </View>
            ) : (
              <View style={[styles.eachIconContainer, {paddingLeft: 20}]}>
                <ConcernIcon width={32} height={32} />
                <Text style={styles.textInActive}>Concern</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.mainChild2}>
          <TouchableOpacity
            onPress={() => {
              handlePressNavigate('Member');
              changeIconAndText('Member');
            }}>
            {activeIcon === 'Member' ? (
              <View style={[styles.eachIconContainer, {paddingRight: 20}]}>
                <MemberHighLight width={32} height={32} />
                <Text style={styles.textActive}>Member</Text>
              </View>
            ) : (
              <View style={[styles.eachIconContainer, {paddingRight: 20}]}>
                <MemberIcon width={32} height={32} />
                <Text style={styles.textInActive}>Member</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handlePressNavigate('Enquiry');
              changeIconAndText('Enquiry');
            }}>
            {activeIcon === 'Enquiry' ? (
              <View style={styles.eachIconContainer}>
                <EnquiryHighLight width={32} height={32} />
                <Text style={styles.textActive}>Enquiry</Text>
              </View>
            ) : (
              <View style={styles.eachIconContainer}>
                <EnquiryIcon width={32} height={32} />
                <Text style={styles.textInActive}>Enquiry</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* This is red icon  */}
      <TouchableOpacity>
        <FastImage
          source={Image.tabNavigationIcon}
          resizeMode="contain"
          // style={styles.image}
          style={{
            width: 75,
            height: 75,
            position: 'absolute',
            left: '40.5%',
            bottom: 55,
          }} // Adjust dimensions as needed
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 85,
    // backgroundColor: 'red',
    backgroundColor: '#f5f5f5',
  },
  mainParent: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#fafafa',
    // backgroundColor: 'red',
  },
  textInActive: {
    color: 'black',
    fontFamily: 'Mulish-SemiBold',
    // backgroundColor: 'yellow',
    marginTop: 5,
  },
  mainChild1: {
    width: '40%',
    height: 80,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mainChild2: {
    width: '40%',
    height: 80,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  eachIconContainer: {
    height: '80%',
    padding: 8,
    // backgroundColor: 'magenta',
    alignItems: 'center',
    bottom: 5,
  },
  textActive: {
    color: '#00008B',
    fontFamily: 'Mulish-SemiBold',
    // backgroundColor: 'yellow',
    marginTop: 5,
  },
});
export default BottomTabComp;
