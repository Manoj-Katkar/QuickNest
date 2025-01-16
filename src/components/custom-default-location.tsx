import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DropDownUpIcon from '../../assets/icons/DropDownUpIcon';
import DropDownIcon from '../../assets/icons/DropDownIcon';
import HomeLocationIcon from '../../assets/icons/HomeLocationIcon';
import ActiveHomeIcon from '../../assets/icons/ActiveHomeIcon';
import DropDownPanicIcon from '../../assets/icons/DropDownPanicIcon';
import DropDownUpActive from '../../assets/icons/DropDownUpActive';

const CustomDefaultLocation = (props: any) => {
  const {
    currentHomeLocation,
    parentStyle,
    locationTextStyle,
    panicActiveStatus,
  } = props;
  const [isPressed, setIsPressed] = useState(false);

  const handleChangeIcon = () => {
    setIsPressed(prevValue => !prevValue);
  };

  return (
    <View style={[styles.toTakeLocation, parentStyle]}>
      <View style={styles.staticLocationContainer}>
        {panicActiveStatus ? (
          <>
            <ActiveHomeIcon />
          </>
        ) : (
          <>
            <HomeLocationIcon />
          </>
        )}

        <Text style={[styles.staticText, locationTextStyle]}>
          Home location
        </Text>
      </View>

      <View style={styles.actualLocationContainer}>
        <View style={styles.actualLocationChild1}>
          <Text
            style={[styles.actualLocationText, locationTextStyle]}
            numberOfLines={isPressed ? undefined : 1}
            ellipsizeMode="tail">
            {currentHomeLocation}
          </Text>
        </View>

        <TouchableOpacity onPress={handleChangeIcon} style={styles.iconBtn}>
          {isPressed ? (
            <>
              {panicActiveStatus ? (
                <>
                  <DropDownUpActive />
                </>
              ) : (
                <>
                  <DropDownUpIcon style={styles.dropDownUpIcon} />
                </>
              )}
            </>
          ) : (
            <>
              {panicActiveStatus ? (
                <>
                  <DropDownPanicIcon />
                </>
              ) : (
                <>
                  <DropDownIcon style={styles.dropDownIcon} />
                </>
              )}
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toTakeLocation: {
    width: '100%',
    alignSelf: 'center',
    // backgroundColor: 'yellow',
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 16,
    rowGap: 15,
    borderWidth: 1,
    borderColor: '#0000000D',
    borderRadius: 15,
  },
  staticLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  staticText: {
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    color: '#2B2B2B',
    paddingLeft: 10,
  },
  actualLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actualLocationChild1: {
    // backgroundColor: 'aqua',
    width: '90%',
  },
  actualLocationText: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
    color: '#2B2B2B',
  },
  dropDownIcon: {},
  dropDownUpIcon: {
    // alignSelf: 'flex-end',
  },
  iconBtn: {
    // backgroundColor: 'red',
  },
});

export default CustomDefaultLocation;
