import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/header-comp';
import CustomTextInput from '../../components/custom-text-input';
import ContactPhoneIcon from '../../../assets/icons/ContactPhoneIcon';
import ContactInboxIcon from '../../../assets/icons/ContactInboxIcon';
import CustomAlert from '../../components/custom-alert';

const ContactUs = ({navigation}: any) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [alertState, setAlertState] = useState({
    visible: false,
    title: '',
    message: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  const handleContact = () => {
    if (!form.name || !form.email || !form.message) {
      setAlertState({
        visible: true,
        title: 'Missing Fields',
        message:
          'All fields are mandatory. Please fill out the name, email, and message fields.',
      });
      return;
    }

    setAlertState({
      visible: true,
      title: 'Success!',
      message:
        'Your message has been submitted successfully! We will get back to you promptly.',
    });

    // Reset form
    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleToContactUsingPhoneNumber = () => {
    const phoneNumber = '+1234567890'; // Replace with the actual default phone number
    Linking.openURL(`tel:${phoneNumber}`).catch(err =>
      Alert.alert('Error', 'Unable to open the phone app.'),
    );
  };

  const handleToContactUsingEmail = () => {
    const email = 'support@example.com'; // Replace with the actual default email address
    const subject = 'Contact Us';
    const body = `Hi, I have an issue to discuss.\n\nThank you,\n${form.name}`;
    Linking.openURL(
      `mailto:${email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
    ).catch(err => Alert.alert('Error', 'Unable to open the email app.'));
  };

  return (
    <View style={styles.container}>
      <CustomHeader headerText="Contact Us" navigation={navigation} />

      <View style={styles.child1}>
        <Text style={styles.headingText}>
          Feel free to contact us anytime. We will get back to you soon as we
          can.
        </Text>
        <CustomTextInput
          label="Name"
          value={form.name}
          placeholder="Enter your name"
          onChangeText={(text: string) => handleInputChange('name', text)}
          textStyle={styles.textInputStyle}
        />

        <CustomTextInput
          label="Email Id"
          value={form.email}
          placeholder="Enter your email id"
          onChangeText={(text: string) => handleInputChange('email', text)}
          textStyle={styles.textInputStyle}
        />
        <CustomTextInput
          label="Message"
          value={form.message}
          placeholder="Write your issues....."
          onChangeText={(text: string) => handleInputChange('message', text)}
          multiline={true}
          textStyle={{
            height: 130,
            fontSize: 15,
            paddingLeft: 15,
            paddingTop: 20,
          }}
        />
        {/* Custom Alert */}
        <CustomAlert
          visible={alertState.visible}
          title={alertState.title}
          message={alertState.message}
          onClose={() => setAlertState(prev => ({...prev, visible: false}))}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btn} onPress={handleContact}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.orTextContainer}>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.orText}>Or</Text>
        <View style={styles.horizontalLine}></View>
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={handleToContactUsingPhoneNumber}>
          <ContactPhoneIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleToContactUsingEmail}>
          <ContactInboxIcon />
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
  headingText: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2BBF',
    marginBottom: 10,
  },
  textInputStyle: {
    height: 62,
    fontSize: 15,
    paddingLeft: 15,
    paddingTop: 20,
  },
  child1: {
    width: '90%',
    alignSelf: 'center',
    rowGap: 22,
    paddingTop: 10,
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
  iconsContainer: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    // paddingBottom: 20,
    paddingVertical: 20,
    marginTop: 40,
  },
  orTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    // backgroundColor: 'yellow',
  },
  orText: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#2B2B2B',
    paddingHorizontal: 10,
  },
  horizontalLine: {
    height: 1.5,
    backgroundColor: '#00000040',
    width: '40%',
    marginVertical: 10,
  },
});

export default ContactUs;
