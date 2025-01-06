import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomHeader from '../../components/header-comp';

const Otp = ({navigation, route}: any) => {
  const {mobileNumber} = route.params;

  // console.log('type of the mobile number : ', typeof mobileNumber);  it is string

  //getting the last two digits of the mobile number
  const lastTwoChars = mobileNumber.slice(-2);

  // Hardcoded OTP for comparison
  const correctOtp = '123456';

  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to store each OTP digit
  const [activeIndex, setActiveIndex] = useState(0); // Index to highlight active input field
  const [error, setError] = useState('');
  const inputRefs = useRef<Array<any>>([]); // Ref array to hold each TextInput reference

  const [seconds, setSeconds] = useState(50);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer: any;
    if (isRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const handleOtpChange = (text: string, index: number) => {
    const numericRegex = /^\d$/;
    if (numericRegex.test(text)) {
      // If the text is a number, update the OTP
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to the next input if the current one is filled
      if (text && index < 5) {
        setActiveIndex(index + 1);
        inputRefs.current[index + 1]?.focus(); // Focus on the next input
      }

      // Reset error
      setError('');

      if (newOtp.join('') === correctOtp) {
        navigation.navigate('DrawerNav');
      }
    }
  };

  const handleFocusNextInput = (index: number) => {
    if (index < otp.length - 1) {
      setActiveIndex(index + 1); // Focus the next input
      inputRefs.current[index + 1]?.focus(); // Move the focus dynamically
    }
  };

  const handleFocusPrevInput = (index: number) => {
    if (index > 0) {
      setActiveIndex(index - 1); // Focus the previous input if backspace is pressed
      inputRefs.current[index - 1]?.focus(); // Move the focus dynamically
    }
  };

  const handleSubmit = () => {
    if (otp.join('') !== correctOtp) {
      setError('Incorrect OTP. Please try again.');
      setOtp(['', '', '', '', '', '']); // Reset OTP fields
      setActiveIndex(0); // Reset the focus to the first input field
      inputRefs.current[0]?.focus(); // Ensure focus goes to the first input field
    } else {
      navigation.navigate('DrawerNav');
    }
  };

  const handleBackspace = (index: number, digit: string) => {
    if (digit === '') {
      // Move focus to the previous input if backspace is pressed
      handleFocusPrevInput(index);
    } else {
      // If digit exists, remove it from the state
      const newOtp = [...otp];
      newOtp[index] = ''; // Clear the current digit
      setOtp(newOtp);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <CustomHeader headerText="Otp verification" navigation={navigation} />

      {/* Otp validation Container*/}
      <View style={styles.enterOtpContainer}>
        <View style={styles.child1}>
          <Text style={styles.child1Text1}>
            Enter the OTP sent to ‘+1 xxxx xxxx{lastTwoChars}
          </Text>
        </View>
        <View style={styles.child2}>
          <Text style={styles.child2Text1}>OTP</Text>
          <View style={styles.otpInputMainContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={[
                  styles.childrens,
                  index === activeIndex && {
                    borderColor: '#001E61',
                    color: 'black',
                  }, // Highlight active input
                ]}
                value={digit}
                onChangeText={text => handleOtpChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                multiline={false}
                autoFocus={index === activeIndex} // Auto-focus the active input
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    handleBackspace(index, digit); // Handle backspace
                  }
                }}
                onSubmitEditing={() => handleFocusNextInput(index)}
                ref={ref => (inputRefs.current[index] = ref)} // Assign ref to each TextInput
              />
            ))}
          </View>
        </View>

        {/* Error Message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Text style={styles.timerText}>{seconds} sec</Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Verify</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.reSendContainer}>
          <Text style={styles.termsAndConditionText}>
            Didn’t receive the code?{' '}
          </Text>
          <TouchableOpacity style={styles.resendContainer}>
            <Text style={styles.didNotText}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
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
  reSendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  termsAndConditionText: {
    fontSize: 15,
    lineHeight: 17.5,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
  },
  didNotText: {
    fontSize: 16,
    lineHeight: 17.5,
    fontFamily: 'Mulish-Bold',
    color: '#4B8DC6',
  },
  resendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterOtpContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  child1Text1: {
    fontSize: 16,
    color: '#2B2B2BBF',
    lineHeight: 20.8,
    fontFamily: 'Mulish-Regular',
    marginTop: 10,
    marginBottom: 10,
  },
  child1: {},
  child2: {
    marginBottom: 25,
    marginTop: 30,
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
  otpInputMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  childrens: {
    width: '13%',
    height: 40,
    borderWidth: 1,
    borderColor: '#2B2B2B80',
    borderRadius: 10,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
  },
  timerText: {
    position: 'absolute',
    top: 150,
    left: 310,
    fontSize: 15,
    fontFamily: 'Mulish-Regular',
    lineHeight: 15.6,
    color: '#2B2B2B80',
    marginBottom: 20,
  },
});

export default Otp;
