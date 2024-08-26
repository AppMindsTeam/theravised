import React from 'react';
import {StyleSheet, Text, Image, ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors} from '../utilities/theme';
import {AppButton, FormInput} from '../../component';
import {Messegeicon} from '../../assets/svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

const ForgotPassword: React.FC<Props> = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      navigation.navigate('OTPScreen');
    },
  });
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={images.applogo} style={styles.logoStyle} />
      <Image source={images.forgotimg} style={styles.imgStyle} />
      <Text style={[appStyles.h4, {marginTop: 8}]}>Forgot Password</Text>
      <Text style={[appStyles.h7, {marginTop: 8}]}>
        Enter your email account to reset password
      </Text>
      <FormInput
        placeholder="Lachie123@gmail.com"
        keyboardType="email-address"
        icon={<Messegeicon />}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        onBlur={formik.handleBlur('email')}
        errorMessage={formik.touched.email && formik.errors.email}
        containerStyle={{marginTop: 15}}
      />
      <AppButton
        title="Sent"
        customStyle={{marginTop: 42}}
        onPress={formik.handleSubmit}
      />
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
  },
  logoStyle: {
    width: 200,
    height: 35,
    alignSelf: 'center',
    marginTop: 60,
  },
  imgStyle: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginTop: 15,
  },
});
