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
    gender: 'Male',
  },
  {
    id: 2,
    gender: 'Female',
  },
  {
    id: 3,
    gender: 'Other',
  },
];

const EditProfile = ({navigation}: any) => {
  const [selectedGender, setSelectedGender] = useState('Select a gender');
  const [form, setForm] = useState({
    name: '',
    gender: '',
    email: '',
    mobile: '',
    zip: '',
    address: '',
  });
  const [userImage, setUserImage] = useState<string | null>(null);
  const handleInputChange = (key: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    console.log('Form Data:', form);
    // Add your save logic here
  };

  const handleBrowse = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      //   console.log('Selected Image:', image);
      setUserImage(image.path);
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

  return (
    <ScrollView style={styles.container}>
      <CustomHeader headerText="Edit Profile" navigation={navigation} />

      {userImage ? (
        <>
          <View style={[styles.imageView]}>
            <View style={styles.actualImageView}>
              <FastImage
                source={{uri: userImage}}
                resizeMode={FastImage.resizeMode.cover} // Adjust this to match the design
                style={[styles.uploadedImage]}
              />
            </View>

            <TouchableOpacity onPress={handleBrowse}>
              <UploadImageIconColor style={styles.uploadImageIcon} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.imageView}>
            <View style={styles.addMemberIconView}>
              <AddMemberImageIcon style={styles.addMemberIcon} />
            </View>

            <TouchableOpacity onPress={handleBrowse}>
              <UploadImageIconColor style={styles.uploadImageIcon} />
            </TouchableOpacity>
          </View>
        </>
      )}
      <View style={styles.mainParentContainer}>
        <Text style={styles.personalText}>Personal Information</Text>
        <CustomTextInput
          label="Name"
          value={form.name}
          placeholder="Enter your name"
          onChangeText={(text: string) => handleInputChange('name', text)}
        />

        <CustomTextInput
          label="Gender"
          value={form.gender}
          placeholder="Select a gender"
          onChangeText={(text: string) => handleInputChange('gender', text)}
        />

        {/* <CustomDropDown
          concernTypeArray={genderArray}
          textHeading="Relation"
          selectedValue={selectedRelation}
          onValueChange={(value: string) => setSelectedRelation(form.gender)}
        /> */}

        <Text style={styles.contactText}>Contact Information</Text>
        <CustomTextInput
          label="Email ID"
          value={form.email}
          placeholder="Enter your email"
          onChangeText={(text: string) => handleInputChange('email', text)}
        />
        <CustomTextInput
          label="Mobile Number"
          value={form.mobile}
          placeholder="Enter your mobile number"
          onChangeText={(text: string) => handleInputChange('mobile', text)}
        />

        <Text style={styles.AddressText}>Address Information</Text>
        <CustomTextInput
          label="Zip Code"
          value={form.zip}
          placeholder="Enter your zip code"
          onChangeText={(text: string) => handleInputChange('zip', text)}
        />
        <CustomTextInput
          label="Address"
          value={form.address}
          placeholder="JohnSmith,1234ElmStreet,Apt.567Springfield, IL 62704USA"
          onChangeText={(text: string) => handleInputChange('address', text)}
          multiline={true}
          textStyle={{height: 105}}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#fff',
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
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 45,
    paddingVertical: 30,
    backgroundColor: '#efefef',
    borderRadius: 50,
  },
  addMemberIcon: {},
  personalText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    marginBottom: 20,
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
});

export default EditProfile;
