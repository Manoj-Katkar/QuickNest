import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import PreviousIcon from '../../../assets/icons/PreviousIcon';
import UploadImageIcon from '../../../assets/icons/UploadImageIcon';
import CustomDropDown from '../../components/custom-dropDown';
import ImagePicker from 'react-native-image-crop-picker';

const concernTypeArray = [
  {id: 1, concernType: 'Panic'},
  {id: 2, concernType: 'Safety'},
  {id: 3, concernType: 'Technical Issue'},
  {id: 4, concernType: 'Feedback'},
  {id: 5, concernType: 'Other'},
];

const Concern = ({navigation}: any) => {
  const [selectedConcernType, setSelectedConcernType] = useState<string>(
    'Select concern type',
  );
  const [description, setDescription] = useState('');
  const [userImage, setUserImage] = useState<string | null>(null);

  const handlePress = () => {
    navigation.goBack();
  };

  const handleChangeText = (text: string) => {
    setDescription(text);
  };
  const handleBrowse = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log('Selected Image:', image);
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

  const handleOpenCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      // console.log('Captured Image:', image);
      setUserImage(image.path);
    } catch (error) {
      if (
        error instanceof Error &&
        error.message === 'User cancelled image selection'
      ) {
        console.log('Camera operation was cancelled by the user.');
      } else {
        console.error('Error capturing image:', error);
      }
    }
  };

  const handleRaiseConcern = () => {
    const concernData = {
      type: selectedConcernType,
      description,
      image: userImage,
    };
    console.log('Concern Data:', concernData);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handlePress}>
          <PreviousIcon width={30} height={30} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Raise Concern</Text>
      </View>

      <View style={styles.subContainer1}>
        {/* here I have creaed the custom dropdown */}
        <CustomDropDown
          concernTypeArray={concernTypeArray}
          textHeading="Type of concern"
          selectedValue={selectedConcernType}
          onValueChange={(value: string) => setSelectedConcernType(value)}
        />

        <View style={styles.child2}>
          <Text style={styles.label2}>Description</Text>
          <TextInput
            style={[
              styles.textInput,
              {
                fontSize: 16,
                paddingTop: 18,
                paddingLeft: 15,
                color: '#2B2B2B80',
              },
            ]}
            placeholder="Explain the concern in brief"
            placeholderTextColor="#2B2B2B80"
            value={description}
            onChangeText={handleChangeText}
            multiline
          />
        </View>

        <View style={styles.child3}>
          <Text style={styles.uploadText1}>Upload image (if possible)</Text>
          <View style={styles.uploadImageContainer}>
            <TouchableOpacity
              onPress={handleBrowse}
              style={styles.browseContainer}>
              <UploadImageIcon />
              <Text style={styles.uploadText2}>Browse in device or</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenCamera}>
              <Text style={styles.uploadText3}>open camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleRaiseConcern}>
          <Text style={styles.btnText}>Raise concern</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  subContainer1: {
    width: '90%',
    alignSelf: 'center',
  },
  headerContainer: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 12,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
    marginLeft: 12,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
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
  label2: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333',
    backgroundColor: '#fafafa',
    fontFamily: 'Mulish-Regular',
    position: 'absolute',
    top: -20,
    left: 20,
    zIndex: 2,
  },
  textInput: {
    height: 135,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 16,
    textAlignVertical: 'top',
    zIndex: 1,
  },
  child2: {
    marginBottom: 25,
  },
  child3: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 15,
    borderStyle: 'dashed',
  },
  uploadImageContainer: {
    width: '93%',
    alignSelf: 'center',
    // backgroundColor: 'aqua',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  uploadText1: {
    color: '#2B2B2B',
    backgroundColor: '#fafafa',
    fontSize: 16,
    position: 'absolute',
    top: -13,
    left: 20,
  },
  uploadText2: {
    color: '#002544',
    fontSize: 16,
    lineHeight: 25,
    marginTop: 15,
    marginBottom: 15,
  },
  uploadText3: {
    color: '#002544',
    fontSize: 16,
    lineHeight: 25,
    marginTop: 15,
    marginBottom: 15,
    textDecorationLine: 'underline',
    fontFamily: 'Mulish-SemiBold',
  },
  browseContainer: {
    width: '58%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Concern;
