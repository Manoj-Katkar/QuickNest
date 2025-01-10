import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  textStyle?: TextStyle;
  multiline?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const {label, textStyle, value} = props;
  return (
    <View style={[styles.inputContainer]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.textInput,
          textStyle,
          {color: value ? '#2B2B2B80' : '#2B2B2B80'}, // Match input text color to placeholder
        ]}
        placeholderTextColor="#2B2B2B80" // Placeholder text color default I am giving
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginVertical: 8,
    color: '#2B2B2B',
    backgroundColor: '#fafafa',
    fontFamily: 'Mulish-Regular',
    position: 'absolute',
    top: -16,
    left: 12,
    zIndex: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
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
    fontSize: 14,
    paddingTop: 16,
    paddingLeft: 12,
  },
});

export default CustomTextInput;
