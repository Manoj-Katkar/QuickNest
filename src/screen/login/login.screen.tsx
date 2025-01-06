import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import CustomHeader from '../../components/header-comp';

const Login = ({navigation}: any) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [borderColor, setBorderColor] = useState('#ccc'); // Default border color
  const [isSelected, setIsSelected] = useState(false);

  const handleTerms = () => {
    setIsSelected(!isSelected); // Toggle selection
  };

  const handlePress = () => {
    navigation.goBack();
  };

  const navigateToOtp = () => {
    navigation.navigate('Otp', {mobileNumber});
  };

  const handleChangeText = (text: string) => {
    // Regular expression to match numbers starting with 6, 7, 8, or 9 and up to 10 digits
    const phoneRegex = /^[6-9][0-9]{0,9}$/;

    if (text === '') {
      // Handle empty input
      setMobileNumber('');
      setError('');
      setBorderColor('#ccc'); // Reset border color to default
    } else if (phoneRegex.test(text)) {
      // Valid input
      setMobileNumber(text);
      setError('');
      if (text.length === 10) {
        setBorderColor('#22304b'); // Valid number with 10 digits
      } else {
        setBorderColor('#22304b'); // Valid but incomplete number
      }
    } else {
      // Invalid input
      setError('Invalid number');
      setBorderColor('red'); // Set border color to red for errors
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header I have Created */}
      <CustomHeader headerText="Get started" navigation={navigation} />

      <View style={styles.enterNumContainer}>
        <View style={styles.child1}>
          <Text style={styles.child1Text1}>
            Enter your mobile number to start
          </Text>
        </View>
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
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn} onPress={navigateToOtp}>
            <Text style={styles.btnText}>Proceed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkBoxContainer}>
          <TouchableOpacity
            style={[styles.box, isSelected && styles.selectedBox]}
            onPress={handleTerms}>
            {isSelected && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.termsAndConditionText}>
            I agree with the terms & conditions
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    // backgroundColor: 'yellow',
  },
  enterNumContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  child1: {
    // backgroundColor: 'yellow',
  },
  child1Text1: {
    fontSize: 16,
    color: '#2B2B2BBF',
    lineHeight: 20.8,
    fontFamily: 'Mulish-Regular',
    marginTop: 10,
    marginBottom: 10,
  },
  child2: {
    marginBottom: 25,
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
    paddingHorizontal: 10,
    marginBottom: 16,
    textAlignVertical: 'top',
    zIndex: 1,
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    backgroundColor: '#fafafa',
    paddingBottom: 20,
  },
  buttonContainer: {
    marginBottom: 15,
  },
  btn: {
    width: '100%',
    backgroundColor: '#001E61',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    // backgroundColor: 'yellow',
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedBox: {
    backgroundColor: '#4e8cc2',
    borderColor: '#4e8cc2',
  },
  termsAndConditionText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: '#2B2B2B',
    lineHeight: 17.57,
  },
  checkmark: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    // marginBottom: 2
    paddingBottom: 2,
  },
  errorText: {marginTop: 5, color: 'red', fontSize: 14},
});

export default Login;
