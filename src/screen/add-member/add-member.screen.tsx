import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/header-comp';
import CustomDropDown from '../../components/custom-dropDown';
import AddMemberImageIcon from '../../../assets/icons/AddMemberImageIcon';
import UploadImageIcon from '../../../assets/icons/UploadImageIcon';
import UploadImageIconColor from '../../../assets/icons/UploadImageIconColor';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import {screenWidth} from '../../responsive';
import {Image} from '../../constant/images';

const concernTypeArray = [
  {id: 1, concernType: 'Mom'},
  {id: 2, concernType: 'Dad'},
  {id: 3, concernType: 'Brother'},
  {id: 4, concernType: 'Sister'},
  {id: 5, concernType: 'Son'},
  {id: 5, concernType: 'Friend'},
];

const AddMember = ({navigation}: any) => {
  const [borderColor, setBorderColor] = useState('#ccc');
  const [memberName, setMemberName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedRelation, setSelectedRelation] = useState('Select a relation');
  const [error, setError] = useState('');
  const [memberNameError, setMemberNameError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const [userImage, setUserImage] = useState<string | null>(null);

  const handleChangeText = (text: string) => {
    // Regular expression to match numbers starting with 6, 7, 8, or 9 and up to 10 digits
    const phoneRegex = /^[6-9][0-9]{0,9}$/;

    if (text === '') {
      // Handle empty input
      setMobileNumber('');
      setMobileNumberError('');
      setBorderColor('#ccc'); // Reset border color to default
    } else if (phoneRegex.test(text)) {
      // Valid input
      setMobileNumber(text);
      setMobileNumberError('');
      if (text.length === 10) {
        setBorderColor('#22304b'); // Valid number with 10 digits
      } else {
        setBorderColor('#22304b'); // Valid but incomplete number
      }
    } else {
      // Invalid input
      setMobileNumberError('Invalid number');
      setBorderColor('red'); // Set border color to red for errors
    }
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

  const handleNameChange = (text: any) => {
    setMemberName(text);
    setMemberNameError('');
  };

  const handleSubmit = () => {
    let valid = true;

    // Validate member name
    if (!memberName) {
      setMemberNameError('Name is required');
      valid = false;
    }

    // Validate mobile number
    if (!mobileNumber || mobileNumber.length !== 10) {
      setMobileNumberError('Valid mobile number is required');
      valid = false;
    }

    // Validate relation selection
    if (selectedRelation === 'Select a relation') {
      setError('Please select a relation');
      valid = false;
    } else {
      setError('');
    }

    if (valid) {
      console.log('Member added:', {
        memberName,
        mobileNumber,
        selectedRelation,
      });
      // navigation.navigate('Otp'); // According to the figma I have to do it
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader headerText="Add Member" navigation={navigation} />
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText1}>
          Add trusted contact who will be notified{'\n'}during emergencies
        </Text>

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

        <View style={styles.enterNumContainer}>
          <View style={styles.child2}>
            <Text style={styles.child2Text1}>Name</Text>
            <TextInput
              style={[
                styles.textInput,
                {
                  fontSize: 16,
                  paddingTop: 18,
                  paddingLeft: 15,
                  color: '#2B2B2B80',
                  borderColor: borderColor,
                  borderWidth: 1,
                },
              ]}
              placeholder="Enter name of the member"
              placeholderTextColor="#2B2B2B80"
              value={memberName}
              onChangeText={handleNameChange}
              keyboardType="default"
              multiline={false}
            />
            {memberNameError ? (
              <Text style={styles.errorText}>{memberNameError}</Text>
            ) : null}
          </View>
        </View>

        <View style={styles.enterNumContainer}>
          <View style={styles.child2}>
            <Text style={styles.child2Text1}>Mobile number</Text>
            <TextInput
              style={[
                styles.textInput,
                {
                  fontSize: 16,
                  paddingTop: 18,
                  paddingLeft: 15,
                  color: '#2B2B2B80',
                  borderColor: borderColor,
                  borderWidth: 1,
                },
              ]}
              placeholder="Enter your mobile number"
              placeholderTextColor="#2B2B2B80"
              value={mobileNumber}
              onChangeText={handleChangeText}
              keyboardType="numeric"
              maxLength={10}
              multiline={false}
            />
            {mobileNumberError ? (
              <Text style={styles.errorText}>{mobileNumberError}</Text>
            ) : null}
          </View>
        </View>

        <CustomDropDown
          concernTypeArray={concernTypeArray}
          textHeading="Relation"
          selectedValue={selectedRelation}
          onValueChange={(value: string) => setSelectedRelation(value)}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Add</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E',
  },
  subContainer: {
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  subContainerText1: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2BBF',
    marginTop: 10,
  },
  enterNumContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  child1: {
    backgroundColor: 'yellow',
  },

  child2: {
    // marginBottom: 25,
    marginTop: 30,
    // backgroundColor: 'aqua',
  },
  child2Text1: {
    fontSize: 16,
    lineHeight: 17.57,
    marginVertical: 8,
    color: '#2B2B2B',
    backgroundColor: '#fafafa',
    fontFamily: 'Mulish-Regular',
    position: 'absolute',
    top: -16,
    left: 20,
    zIndex: 2,
  },
  textInput: {
    height: 55,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 15,
    textAlignVertical: 'top',
    zIndex: 1,
  },
  errorText: {marginTop: 5, color: 'red', fontSize: 14},
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
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  addMemberIconView: {
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 45,
    paddingVertical: 30,
    backgroundColor: '#efefef',
    borderRadius: 50,
  },
  addMemberIcon: {},
  uploadImageIcon: {
    position: 'absolute',
    top: -30,
    left: 15,
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
    paddingHorizontal: 45,
    borderRadius: 50,
  },
});

export default AddMember;
