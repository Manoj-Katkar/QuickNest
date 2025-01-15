import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../components/custom-text-input';
import CustomHeader from '../../components/header-comp';
import FastImage from 'react-native-fast-image';
import UploadImageIconColor from '../../../assets/icons/UploadImageIconColor';
import AddMemberImageIcon from '../../../assets/icons/AddMemberImageIcon';
import ImagePicker from 'react-native-image-crop-picker';
import {screenWidth} from '../../responsive';
import CustomDropDown from '../../components/custom-dropDown';

const genderArray = [
  {
    id: 1,
    Type: 'Male',
  },
  {
    id: 2,
    Type: 'Female',
  },
  {
    id: 3,
    Type: 'Other',
  },
  {
    id: 4,
    Type: 'Other',
  },
  {
    id: 5,
    Type: 'Other',
  },
];

const EditProfile = ({navigation}: any) => {
  // State for form inputs
  const [form, setForm] = useState({
    name: '',
    gender: 'Select a gender',
    email: '',
    mobile: '',
    zip: '',
    address: '',
    uploadedImage: '',
  });

  // Handle input change for text inputs
  const handleInputChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  // Handle dropdown value change
  const handleDropDownChange = (value: string) => {
    setForm(prev => ({...prev, gender: value}));
  };

  // Handle image browsing and upload
  const handleBrowse = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setForm(prev => ({...prev, uploadedImage: image.path}));
    } catch (error) {
      if (
        error instanceof Error &&
        error.message === 'User cancelled image selection'
      ) {
        console.log('Image selection was cancelled by the user.');
      } else {
        console.error('Error selecting image:', error);
      }
    }
  };

  // Submit and reset form
  const submitAllData = () => {
    console.log('Form Data of Edit Profile Screen:', form);
    setForm({
      name: '',
      gender: 'Select a gender',
      email: '',
      mobile: '',
      zip: '',
      address: '',
      uploadedImage: '',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <>
        <CustomHeader headerText="Edit Profile" navigation={navigation} />

        {form.uploadedImage ? (
          <View style={styles.imageView}>
            <View style={styles.actualImageView}>
              <FastImage
                source={{uri: form.uploadedImage}}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.uploadedImage}
              />
            </View>
            <TouchableOpacity onPress={handleBrowse}>
              <UploadImageIconColor style={styles.uploadImageIcon} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imageView}>
            <View style={styles.addMemberIconView}>
              <Text style={styles.addMemberIcon}>L</Text>
            </View>
            <TouchableOpacity onPress={handleBrowse}>
              <UploadImageIconColor style={styles.uploadImageIcon} />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.mainParentContainer}>
          <Text style={styles.personalText}>Personal Information</Text>
          <View style={styles.personalInfoParent}>
            <CustomTextInput
              label="Name"
              value={form.name}
              placeholder="Enter your name"
              onChangeText={(text: string) => handleInputChange('name', text)}
              textStyle={styles.textInputStyle}
            />
            {/* Jugad To handle the nested FlatList Error */}
            <ScrollView
              horizontal
              contentContainerStyle={{
                width: '100%',
                zIndex: 0,
                paddingTop: 10, //this resolved the my error
              }}>
              <CustomDropDown
                concernTypeArray={genderArray}
                textHeading="Gender"
                selectedValue={form.gender}
                onValueChange={handleDropDownChange}
                parentContainerStyle={{marginTop: 0, width: '100%'}}
              />
            </ScrollView>
          </View>

          <Text style={styles.contactText}>Contact Information</Text>
          <View style={styles.contactParent}>
            <CustomTextInput
              label="Email ID"
              value={form.email}
              placeholder="Enter your email"
              onChangeText={(text: string) => handleInputChange('email', text)}
              textStyle={styles.textInputStyle}
            />
            <CustomTextInput
              label="Mobile Number"
              value={form.mobile}
              placeholder="Enter your mobile number"
              onChangeText={(text: string) => handleInputChange('mobile', text)}
              textStyle={styles.textInputStyle}
            />
          </View>

          <Text style={styles.AddressText}>Address Information</Text>
          <View style={styles.addressInfoParent}>
            <CustomTextInput
              label="Zip Code"
              value={form.zip}
              placeholder="Enter your zip code"
              onChangeText={(text: string) => handleInputChange('zip', text)}
              textStyle={styles.textInputStyle}
            />
            <CustomTextInput
              label="Address"
              value={form.address}
              placeholder="JohnSmith,1234ElmStreet,Apt.567Springfield,IL 62704USA"
              onChangeText={(text: string) =>
                handleInputChange('address', text)
              }
              multiline={true}
              textStyle={{
                height: 86,
                fontSize: 15,
                paddingLeft: 15,
                paddingTop: 20,
              }}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn} onPress={submitAllData}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#fafafa',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
  },
  saveButton: {
    width: '80%',
    backgroundColor: '#002D62',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainParentContainer: {
    width: '85%',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'column',
    width: '89%',
    backgroundColor: '#011e62',
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#011e62',
    marginBottom: 15,
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
  },
  imageView: {
    // backgroundColor: 'aqua',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  imageText: {
    fontSize: 30,
    color: 'black',
  },

  uploadedImage: {
    width: screenWidth * 0.28,
    height: 100,
    alignSelf: 'center',
    borderRadius: 75,
  },
  UploadImageContainer: {
    position: 'relative',
    width: '20%',
    height: 20,
    marginBottom: 20,
  },
  actualImageView: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  uploadImageIcon: {
    position: 'absolute',
    top: -30,
    left: 15,
  },
  addMemberIconView: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 45,
    paddingVertical: 25,
    // backgroundColor: '#efefef',
    backgroundColor: '#E8EBFB',
    borderRadius: 50,
  },
  addMemberIcon: {
    fontSize: 33,
    fontFamily: 'Mulish-Bold',
    color: '#2B2B2B',
  },
  personalText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    marginBottom: 20,
    marginTop: 20,
  },
  contactText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    marginBottom: 20,
  },
  AddressText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    marginBottom: 20,
  },
  textInputStyle: {
    height: 62,
    fontSize: 15,
    paddingLeft: 15,
    paddingTop: 20,
  },
  personalInfoParent: {
    rowGap: 12,
  },
  addressInfoParent: {
    rowGap: 12,
  },
  contactParent: {
    rowGap: 12,
  },
});

export default EditProfile;
