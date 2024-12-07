import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Image as constImage} from '../../constant/images';
import {useNavigation} from '@react-navigation/native';
import HomeDark from '../../../assets/icons/HomeDark';
import HomeIcon from '../../../assets/icons/HomeIcon';
import ConcernHighLight from '../../../assets/icons/ConcernHighLight';
import CooncernIcon from '../../../assets/icons/ConcernIcon';
import MemberHighLight from '../../../assets/icons/MemberHighLight';
import MemberIcon from '../../../assets/icons/MemberIcon';
import EnquiryHighLight from '../../../assets/icons/EnquiryHighLight';
import EnquiryIcon from '../../../assets/icons/EnquiryIcon';
import FastImage from 'react-native-fast-image';
import BottomBackGroundImage from '../../../assets/icons/BottomBackGroundImage';

const {width: screenWidth, height} = Dimensions.get('window');

const Concern = () => {
  let navigation = useNavigation() as any;

  const [activeIcon, setActiveIcon] = useState('Home'); //because I want the by-default the Home should be selected

  const handlePressNavigate = (pageName: string) => {
    navigation.navigate(pageName);
  };

  const changeIconAndText = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.backgroundContainer}>
          {/* BottomBackGroundImage is at the bottom */}
          <BottomBackGroundImage width={screenWidth} />
        </View>
        {/* This is red icon  */}
        <TouchableOpacity>
          <FastImage
            source={constImage.tabNavigationIcon}
            resizeMode="contain"
            // style={styles.image}
            style={{
              width: 75,
              height: 75,
              position: 'absolute',
              left: '40.5%',
              bottom: 60,
            }} // Adjust dimensions as needed
          />
        </TouchableOpacity>
      </View>

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
                <CooncernIcon width={32} height={32} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  backgroundImage: {
    // flex: 1,
    width: '100%',
    height: 85,
    backgroundColor: '#f5f5f5',
    // backgroundColor: 'transparent',
    marginTop: 20,
    marginBottom: 50,
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
  textInActive: {
    color: 'black',
    fontFamily: 'Mulish-SemiBold',
    // backgroundColor: 'yellow',
    marginTop: 5,
  },
  mainParent: {
    // flex: 1,
    position: 'absolute',
    top: 8,
    left: 0,

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#fafafa',
    // backgroundColor: 'yellow',
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
  backgroundContainer: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 50, // Ensure it has enough space for the iconss
    // zIndex: -1, // Make sure it's behind everything},
  },
});

export default Concern;
