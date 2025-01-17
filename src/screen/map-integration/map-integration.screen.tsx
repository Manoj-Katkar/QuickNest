import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CustomHeader from '../../components/header-comp';
import CustomTextInput from '../../components/custom-text-input';
import CustomAlert from '../../components/custom-alert';
import {Image} from '../../constant/images';
import MapIcon from '../../../assets/icons/MapIcon';
import RecordingMapIcon from '../../../assets/icons/RecordingMapIcon';
import DropDownIcon from '../../../assets/icons/DropDownIcon';
import DropDownUpIcon from '../../../assets/icons/DropDownUpIcon';
import UploadImageIcon from '../../../assets/icons/UploadImageIcon';
import {screenHeight} from '../../responsive';

const MapIntegration = ({navigation}: any) => {
  const [form, setForm] = useState({
    uploadedImage: '',
    description: '',
  });

  const [isPressed, setIsPressed] = useState(false);

  const [alertState, setAlertState] = useState({
    visible: false,
    title: '',
    message: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleOpenCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
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
        console.log('Camera operation was cancelled by the user.');
      } else {
        console.error('Error capturing image:', error);
      }
    }
  };

  const handleSubmit = () => {
    if (!form.description || !form.uploadedImage) {
      setAlertState({
        visible: true,
        title: 'Missing Fields',
        message:
          'All fields are mandatory. Please upload an image and provide a description.',
      });
      return;
    }

    setAlertState({
      visible: true,
      title: 'Success!',
      message:
        'Your message has been submitted successfully! We will get back to you have patience.',
    });

    console.log('forDataSubmited From Map Screen : ', form);

    // Reset form
    setForm({
      uploadedImage: '',
      description: '',
    });
  };

  const toggleTheUI = () => {
    setIsPressed(prevValue => !prevValue);
  };

  return (
    <>
      <ImageBackground
        source={Image.mapImage}
        style={styles.backgroundImage}
        resizeMode="cover">
        <CustomHeader navigation={navigation} />
        <MapIcon style={styles.mapIcon} />

        <View style={styles.parentContainer}>
          <View style={styles.twoLinesContainer}>
            <View style={styles.smallhorizontalLine} />
            <View style={styles.smallhorizontalLine} />
          </View>
          <View style={styles.recordingTextContainer}>
            <RecordingMapIcon style={styles.recordingIcon} />
            <Text style={styles.recordingText}>
              Recording has been sent to admin {'\n'} & help will be arriving
              shortly{' '}
            </Text>
          </View>

          <View style={styles.horizontalLine} />

          <View style={styles.helpContainer}>
            <Text style={styles.helpText}>Help is on the way</Text>
          </View>

          <View style={styles.additionalInfoContainer}>
            <Text style={styles.addText}>Add additional information</Text>
            <TouchableOpacity onPress={toggleTheUI}>
              {isPressed ? (
                <DropDownUpIcon style={styles.dropDownUpIcon} />
              ) : (
                <DropDownIcon style={styles.dropDownIcon} />
              )}
            </TouchableOpacity>
          </View>

          {isPressed && (
            <View style={styles.toggleChild}>
              <View style={styles.cameraContainer}>
                <TouchableOpacity onPress={handleOpenCamera}>
                  <View style={styles.uploadImageContainer}>
                    <UploadImageIcon style={styles.iconBrowseInDevice} />
                    <Text style={styles.browseText}>Open camera</Text>
                    <Text style={styles.uploadText}>Upload image</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <CustomTextInput
                label="Description"
                value={form.description}
                placeholder="Describe your situation here...."
                onChangeText={(text: string) =>
                  handleInputChange('description', text)
                }
                multiline={true}
                textStyle={{
                  height: 130,
                  fontSize: 15,
                  paddingLeft: 15,
                  paddingTop: 20,
                }}
              />

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>

      <CustomAlert
        visible={alertState.visible}
        title={alertState.title}
        message={alertState.message}
        onClose={() => setAlertState(prev => ({...prev, visible: false}))}
      />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    // height: screenHeight * 0.99,
    alignItems: 'center', // Align content horizontally
    // paddingTop: 10,
    // marginTop: 30,
  },
  mapIcon: {position: 'absolute', top: 495, left: 185},
  parentContainer: {
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'yellow',
    backgroundColor: '#fafafa',
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 15,
    rowGap: 10,
  },
  twoLinesContainer: {
    left: 140,
    bottom: 10,
  },
  recordingTextContainer: {
    flexDirection: 'row',
    columnGap: 10,
    backgroundColor: '#e9eef4',

    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  recordingIcon: {},
  recordingText: {
    fontSize: 14,
    fontFamily: 'Mulish-SemiBold',
    color: '#0063F7',
  },
  helpContainer: {
    marginBottom: 10,
  },
  helpText: {
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    color: '#2B2B2B',
  },
  dropDownIcon: {},
  dropDownUpIcon: {},
  addText: {
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    color: '#4B8DC6',
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
  cameraContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  btn: {
    // flexDirection: 'column',
    width: '100%',
    // height: 100,
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
  additionalInfoContainer: {
    // backgroundColor: 'aqua',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 1.5,
    width: '100%',
    backgroundColor: '#2B2B2B1A',
    marginVertical: 10,
  },
  smallhorizontalLine: {
    height: 2.5,
    width: '8%',
    backgroundColor: '#2B2B2B40',
    marginVertical: 1,
  },
  toggleChild: {
    width: '100%',
    rowGap: 10,
  },
});

export default MapIntegration;
