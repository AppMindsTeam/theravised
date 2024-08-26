import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors, fonts} from '../utilities/theme';
import {AppButton, FormInput} from '../../component';
import {Checkbox, Lockicon, Messegeicon, UnCheckbox} from '../../assets/svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignIn: React.FC<Props> = ({navigation}) => {
  const [hidePasswod, setHidePassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const togglePassword = () => setHidePassword(!hidePasswod);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().required('Password required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      //   signinUser(values);
      //   navigation.navigate('ChoseAccount');
    },
  });

  return (
    <View style={styles.container}>
      <Image source={images.applogo} style={styles.imgStyle} />
      <Text style={[appStyles.h4, {textAlign: 'center', marginTop: 52}]}>
        Login
      </Text>
      <Text
        style={[
          appStyles.h5,
          {textAlign: 'center', marginTop: 8, color: colors.gray[50]},
        ]}>
        Please login to continue with the app.
      </Text>
      <FormInput
        placeholder="abc@gmail.com"
        keyboardType="email-address"
        icon={<Messegeicon />}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        onBlur={formik.handleBlur('email')}
        errorMessage={formik.touched.email && formik.errors.email}
      />

      <FormInput
        placeholder="Password"
        icon={<Lockicon />}
        isPassword={true}
        secureTextEntry={hidePasswod}
        onLeftIconPress={togglePassword}
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        onBlur={formik.handleBlur('password')}
        errorMessage={formik.touched.password && formik.errors.password}
      />
      <TouchableOpacity
        style={styles.forgotContainer}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Checkbox />
        <Text style={[appStyles.h6, {marginLeft: 5}]}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={[styles.boxContainer, {marginTop: 30}]}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          {isChecked ? <Checkbox /> : <UnCheckbox />}
        </TouchableOpacity>
        <Text style={[appStyles.h7, {color: colors.gray[50], marginLeft: 5}]}>
          I accept the
          <Text style={[appStyles.h7, {color: colors.primary}]}>
            {' '}
            Terms & Conditions
          </Text>
        </Text>
      </View>
      <View style={styles.boxContainer}>
        <TouchableOpacity onPress={() => setIsChecked2(!isChecked2)}>
          {isChecked2 ? <Checkbox /> : <UnCheckbox />}
        </TouchableOpacity>

        <Text style={[appStyles.h7, {color: colors.gray[50], marginLeft: 5}]}>
          I accept the
          <Text style={[appStyles.h7, {color: colors.primary}]}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
      </View>
      <AppButton
        title="Login"
        customStyle={{marginTop: 40}}
        onPress={formik.handleSubmit}
      />

      <View style={styles.bottomContainer}>
        <Text style={appStyles.h7}>I already have an account!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={[
              appStyles.h7,
              {color: colors.primary, fontFamily: fonts.MontserratSemiBold},
            ]}>
            {' '}
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,

    paddingHorizontal: 18,
  },
  imgStyle: {
    width: 220,
    height: 38,
    alignSelf: 'center',
    marginTop: 107,
  },

  boxContainer: {flexDirection: 'row', marginTop: 15, alignItems: 'center'},
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  bottomContainer: {flexDirection: 'row', alignSelf: 'center', marginTop: 15},
});
