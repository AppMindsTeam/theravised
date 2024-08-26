import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors, fonts} from '../utilities/theme';
import {AppButton} from '../../component';
import OTPInput from '../../component/auth/OTPInput';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<AuthStackParamList, 'OTPScreen'>;

const OTPScreen: React.FC<Props> = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    OTPNumber: Yup.string()
      .min(4, 'OTP must be at least 4 digits')
      .required('OTP is required'),
  });

  const formik = useFormik({
    initialValues: {
      OTPNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values.OTPNumber);
      navigation.navigate('ResetPassword');
    },
  });

  return (
    <View style={styles.container}>
      <Image source={images.applogo} style={styles.logoStyle} />
      <Text style={[appStyles.h4, {marginTop: 35}]}>
        Enter Verification Code
      </Text>
      <View style={styles.innerContainer}>
        <Text style={appStyles.h7}>We have sent a code to</Text>
        <Text
          style={[
            appStyles.h7,
            {color: colors.primary, fontFamily: fonts.MontserratBold},
          ]}>
          {' '}
          lachie123@gmail.com
        </Text>
      </View>

      <OTPInput setOTPCode={code => formik.setFieldValue('OTPNumber', code)} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 12,
        }}>
        <Text style={appStyles.h7}>Didn’t you receive any code?</Text>
        <TouchableOpacity>
          <Text
            style={[
              appStyles.h7,
              {color: colors.primary, fontFamily: fonts.MontserratSemiBold},
            ]}>
            {' '}
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>

      <AppButton
        title="Verify Now"
        customStyle={{marginTop: 133}}
        onPress={formik.handleSubmit}
      />
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
  },
  innerContainer: {marginTop: 6, flexDirection: 'row', alignItems: 'center'},
  logoStyle: {
    width: 200,
    height: 35,
    alignSelf: 'center',
    marginTop: 60,
  },
});
