import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import AddMemberIcon from '../../../assets/icons/AddMemberIcon';
import NextBlueIcon from '../../../assets/icons/NextBlueIcon';
import PremiumIcon from '../../../assets/icons/PremiumIcon';
import FastImage from 'react-native-fast-image';
import {Image} from '../../constant/images';
import CircleIcon from '../../../assets/icons/CircleIcon';
import MemberFirstIcon from '../../../assets/icons/MemberFirstIcon';
import DeleteMemberIcon from '../../../assets/icons/DeleteMemberIcon';
import {FlatList} from 'react-native-gesture-handler';
import AddMemberIcon2 from '../../../assets/icons/AddMemberIcon2';
import AddMember3 from '../../../assets/icons/AddMemberIcon3';

const MembersArray = [
  {
    id: 1,
    memberIcon: <MemberFirstIcon width={70} height={70} />,
    memberName: 'Dad',
    memberPhoneNo: '+1 2384839293',
  },
  {
    id: 2,
    memberIcon: <AddMemberIcon2 width={70} height={70} />,
    memberName: 'Mom',
    memberPhoneNo: '+1 2384839293',
  },
  {
    id: 3,
    memberIcon: <AddMember3 width={70} height={70} />,
    memberName: 'Marcus',
    memberPhoneNo: '+1 2384839293',
  },
];

const Member = ({navigation}: any) => {
  const [memberToRemoveIndex, setMemberToRemoveIndex] = useState(-1);

  const removeItemAtCurrentIndex = (currentElementIndex: number) => {
    setMemberToRemoveIndex(currentElementIndex);
    console.log('currenIndex : ', currentElementIndex);

    MembersArray.splice(currentElementIndex, 1);
  };

  const renderEachMember = useCallback(
    ({item, index}: any) => {
      return (
        <>
          <View style={styles.listMainParent}>
            <View style={styles.listChild1}>
              <View style={styles.actualMemberIcon}>{item.memberIcon}</View>
              <View style={styles.useDetailsContainer}>
                <Text
                  style={styles.memberName}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.memberName}
                </Text>
                <Text style={styles.memberPhoneNumber}>
                  {item.memberPhoneNo}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                removeItemAtCurrentIndex(index);
              }}>
              <View style={styles.listChild2}>
                <DeleteMemberIcon width={30} height={30} />
              </View>
            </TouchableOpacity>
          </View>
          {index === MembersArray.length - 1 ? (
            <>{null}</>
          ) : (
            <>
              <View style={styles.horizontalLine}></View>
            </>
          )}
        </>
      );
    },
    [MembersArray],
  );

  const navigateToHouseholdMemberScreen = () => {
    navigation.navigate('HouseHoldMember');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Household Member</Text>
      <TouchableOpacity
        style={styles.btn1}
        onPress={navigateToHouseholdMemberScreen}>
        <View style={styles.child1}>
          <View style={styles.subChild1}>
            <View style={styles.memberaddContainer}>
              <AddMemberIcon style={styles.addIcon} />
            </View>
            <Text style={styles.newMemberText}>Add new member</Text>
          </View>

          <NextBlueIcon style={styles.nextIcon} width={20} height={20} />
        </View>
      </TouchableOpacity>

      <View style={styles.appUserDetails}>
        <View style={styles.appUserContainer1}>
          <CircleIcon width={90} height={85} />
          <Text style={styles.appUserContainerText}>L</Text>
          {/* <Text style={styles.appUserContainerText}>L</Text> */}
          <PremiumIcon style={styles.premiumIcon} width={20} height={20} />
        </View>

        <View style={styles.appUserContainer2}>
          <Text style={styles.userName}>Monkey D. Luffy</Text>
          <Text style={styles.userNumber}>+1 2384839293</Text>
          <Text style={styles.userType}>Primary holder</Text>
        </View>
      </View>
      <View style={styles.horizontalLine}></View>
      <Text style={styles.totalMembersText}>
        Members ({MembersArray.length})
      </Text>

      {MembersArray.length > 0 ? (
        <>
          <FlatList
            data={MembersArray}
            renderItem={renderEachMember}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </>
      ) : (
        <>
          <View style={styles.imageParentContainer}>
            <View style={styles.imageChildContainer}>
              <FastImage
                source={Image.noMembersImage}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.noMembersText}>No members currently</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  newMemberText: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    lineHeight: 20.8,
    color: '#294090',
  },
  mainHeading: {
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    color: '#2B2B2B',
    marginTop: 27,
    marginLeft: 20,
  },
  nextIcon: {
    marginRight: 5,
  },
  child1: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subChild1: {
    width: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn1: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    // backgroundColor: 'yellow',
  },
  addIcon: {
    // padding: ,
  },
  memberaddContainer: {
    backgroundColor: '#ecedf2',
    borderRadius: 100,
    padding: 10,
    marginRight: 7,
  },
  appUserDetails: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 20,
    marginTop: 30,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#2B2B2B1A',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  appUserContainer1: {
    // backgroundColor: 'yellow',
  },
  appUserContainer2: {
    // backgroundColor: 'aqua',
  },
  appUserContainerText: {
    color: '#2B2B2B',
    fontSize: 26,
    fontFamily: 'Mulish-Bold',
    lineHeight: 30.08,
    position: 'absolute',
    top: 25,
    left: 37,
  },
  premiumIcon: {
    position: 'absolute',
    top: -2,
    left: 60,
    backgroundColor: '#f8f5ee',
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 15,
  },
  userName: {
    fontSize: 22,
    fontFamily: 'Mulish-Bold',
    lineHeight: 25.1,
    color: '#2B2B2B',
  },
  userNumber: {
    fontSize: 13,
    fontFamily: 'Mulish-Medium',
    lineHeight: 15.5,
    marginTop: 7,
    color: '#2B2B2BBF',
  },
  userType: {
    width: '60%',
    fontSize: 11,
    fontFamily: 'Mulish-Medium',
    color: '#3CB371',
    marginTop: 9,
    padding: 4,
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: '#e4eae8',
    marginBottom: 5,
  },
  totalMembersText: {
    color: '#2B2B2B',
    fontSize: 16,
    lineHeight: 15,
    fontFamily: 'Mulish-Medium',
    marginTop: 10,
    marginLeft: 20,
  },
  noMembersText: {
    color: '#2B2B2B',
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    lineHeight: 20.8,
    textAlign: 'center',
    marginTop: 15,
  },
  imageParentContainer: {
    flex: 1,
    // backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageChildContainer: {
    width: '80%',
    height: 300,
    // backgroundColor: 'magenta',
    marginTop: 50,
  },
  actualMemberIcon: {},
  listMainParent: {
    width: '90%',
    // backgroundColor: 'aqua',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  memberName: {
    fontSize: 18,
    fontFamily: 'Mulish-Medium',
    color: '#2B2B2B',
    lineHeight: 20.8,
    rowGap: 10,
    // columnGap: 20,
  },
  memberPhoneNumber: {
    color: '#2B2B2BBF',
    fontSize: 14,
    fontFamily: 'Mulish-Medium',
    lineHeight: 15.06,
  },
  listChild1: {
    // backgroundColor: 'yellow',
    width: '85%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 13,
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  listChild2: {
    padding: 10,
  },
  useDetailsContainer: {
    rowGap: 10,
  },
});

export default Member;
