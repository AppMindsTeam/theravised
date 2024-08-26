import {StyleSheet} from 'react-native';
import React from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {colors} from '../../screens/utilities/theme';

const OTPInput = ({setOTPCode}: {setOTPCode: (text: string) => void}) => {
  return (
    <OtpInput
      numberOfDigits={4}
      focusColor={colors.primary}
      focusStickBlinkingDuration={500}
      onTextChange={text => console.log(text)}
      onFilled={text => setOTPCode(text)}
      textInputProps={{
        accessibilityLabel: 'One-Time Password',
      }}
      theme={{
        containerStyle: styles.container,
        pinCodeContainerStyle: styles.pinCodeContainer,
        pinCodeTextStyle: styles.pinCodeText,
        focusedPinCodeContainerStyle: styles.activePinCodeContainer,
      }}
    />
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  pinCodeContainer: {
    width: 70,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray[100],
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: colors.bgcolor,
  },
  pinCodeText: {
    fontSize: 22,
  },
  activePinCodeContainer: {
    borderColor: colors.primary,
  },
});
