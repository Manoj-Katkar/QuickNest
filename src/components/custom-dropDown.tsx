import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import DropDownIcon from '../../assets/icons/DropDownIcon';

const CustomDropDown = (props: any) => {
  const {
    concernTypeArray,
    textHeading,
    selectedValue,
    onValueChange,
    parentContainerStyle,
  } = props;

  // console.log('props', concernTypeArray);
  console.log('textHeading : ', textHeading);

  const [isClicked, setIsClicked] = useState(false);

  const renderEachType = useCallback(
    ({item}: any) => {
      return (
        <TouchableOpacity
          style={styles.concernItem}
          onPress={() => {
            console.log('Item selected from the custom dropdown :', item.Type);
            onValueChange(item.Type); // Pass selected value to parent
            setIsClicked(false); // Close dropdown
          }}>
          <Text style={styles.typeText}>{item.Type}</Text>
        </TouchableOpacity>
      );
    },
    [onValueChange],
  );

  return (
    <View style={[styles.child1, parentContainerStyle]}>
      <Text style={styles.label1}>{textHeading}</Text>
      <TouchableOpacity
        style={[
          styles.dropDownSelector,
          isClicked && styles.activeDropDownSelector,
        ]}
        onPress={() => {
          setIsClicked(!isClicked);
        }}>
        <Text style={styles.defaultText}>
          {selectedValue || 'placeHolderText Empty'}
        </Text>
        <DropDownIcon />
      </TouchableOpacity>

      {isClicked ? (
        <View style={styles.dropDownArea}>
          <FlatList
            data={concernTypeArray}
            renderItem={renderEachType}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{paddingVertical: 10}}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  child1: {
    marginTop: 20,
    marginBottom: 20,
  },
  label1: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333',
    backgroundColor: '#fafafa',
    fontFamily: 'Mulish-Regular',
    position: 'absolute',
    top: -20,
    left: 20,
    zIndex: 2,
    // paddingLeft: 2,
  },
  dropDownSelector: {
    width: '100%',
    height: 60,
    // borderRadius: 10,
    borderTopLeftRadius: 15, // top-left corner
    borderTopRightRadius: 15, // top-right corner
    borderBottomLeftRadius: 15, // bottom-left corner
    borderBottomRightRadius: 15, // bottom-right corner
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderStyle: 'solid',
    alignSelf: 'center',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  activeDropDownSelector: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  defaultText: {
    color: '#2B2B2B80',
    fontSize: 16,
  },
  dropDownArea: {
    width: '100%',
    height: 110,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderStyle: 'solid',
    alignSelf: 'center',
    top: -5,
    borderTopWidth: 0,
    borderTopLeftRadius: 0, // top-left corner
    borderTopRightRadius: 0, // top-right corner
    borderBottomLeftRadius: 15, // bottom-left corner
    borderBottomRightRadius: 15, // bottom-right corner
  },
  concernItem: {
    width: '90%',
    height: 50,
    borderBottomWidth: 0.8,
    borderBottomColor: '#c7c7c7',
    alignSelf: 'center',
    justifyContent: 'center',
    // paddingTop: 10,
  },
  typeText: {
    color: '#2B2B2B80',
    fontSize: 16,
  },
});

export default CustomDropDown;
