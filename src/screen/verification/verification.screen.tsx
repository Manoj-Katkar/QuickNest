import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/header-comp';
import CustomTextInput from '../../components/custom-text-input';
import CustomDropDown from '../../components/custom-dropDown';
import UploadImageIcon from '../../../assets/icons/UploadImageIcon';
import ImagePicker from 'react-native-image-crop-picker';

const verificationTypeArray = [
  {id: 1, Type: 'Emergency'},
  {id: 2, Type: 'Security'},
  {id: 3, Type: 'System Error'},
  {id: 4, Type: 'User Comments'},
  {id: 5, Type: 'Miscellaneous'},
];

const Verification = ({navigation}: any) => {
  const [form, setForm] = useState({
    mobile: '',
    zip: '',
    address: '',
    selectedVerificationType: 'Select type of verification',
    uploadedImage: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleBrowse = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log('Selected Image:', image.path);
      setForm(prev => ({
        ...prev,
        uploadedImage: image.path,
      }));
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

  const handleDropDownChange = (value: string) => {
    console.log('Dropdown value selected:', value);
    setForm(prev => ({
      ...prev,
      selectedVerificationType: value,
    }));
  };

  const submitAllData = () => {
    // Log the current state
    console.log('Form Data:', form);

    // Reset the state
    setForm({
      mobile: '',
      zip: '',
      address: '',
      selectedVerificationType: 'Select type of verification',
      uploadedImage: '',
    });
  };

  return (
    <View style={styles.container}>
      <CustomHeader headerText="Verification" navigation={navigation} />

      <View style={styles.parentContainer}>
        <CustomTextInput
          label="Mobile number"
          value={form.mobile}
          placeholder="+1 23456789"
          onChangeText={(text: string) => handleInputChange('mobile', text)}
          textStyle={styles.textInputStyle}
        />

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
          placeholder="Enter your address"
          onChangeText={(text: string) => handleInputChange('address', text)}
          textStyle={styles.textInputStyle}
        />

        {/* Custom Dropdown */}
        <CustomDropDown
          concernTypeArray={verificationTypeArray}
          textHeading="Verification"
          selectedValue={form.selectedVerificationType}
          onValueChange={(value: string) => {
            console.log('Dropdown value passed to parent:', value);
            handleDropDownChange(value); // Update the form state
          }}
          parentContainerStyle={{marginTop: 0}}
        />

        <TouchableOpacity onPress={handleBrowse}>
          <View style={styles.uploadImageContainer}>
            <UploadImageIcon style={styles.iconBrowseInDevice} />
            <Text style={styles.browseText}>Browse in device</Text>
            <Text style={styles.uploadText}>Upload Documents</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={submitAllData}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  parentContainer: {
    width: '88%',
    alignSelf: 'center',
    marginTop: 20,
    rowGap: 12,
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
  uploadImageContainer: {
    width: '100%',
    height: 62,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#c7c7c7',
    borderStyle: 'dashed',
    borderRadius: 17,
  },
  browseText: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#002544',
  },
  uploadText: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
    backgroundColor: '#fafafa',
    paddingHorizontal: 5,
    position: 'absolute',
    top: -12,
    left: 14,
    borderRadius: 15,
  },
  iconBrowseInDevice: {
    marginRight: 10,
  },
  textInputStyle: {
    height: 62,
    fontSize: 15,
    paddingLeft: 15,
    paddingTop: 20,
  },
});

export default Verification;
