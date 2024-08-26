import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors, fonts} from '../utilities/theme';
import {AppButton, FormInput} from '../../component';
import {
  Checkbox,
  Lockicon,
  Messegeicon,
  Nameicon,
  Referalicon,
  UnCheckbox,
} from '../../assets/svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUp: React.FC<Props> = ({navigation}) => {
  const [hidePasswod, setHidePassword] = useState(true);
  const togglePassword = () => setHidePassword(!hidePasswod);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
    code: Yup.string().required('Referral-Code required'),
    password: Yup.string().required('Password required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      code: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      //   signinUser(values);
      //   navigation.navigate('ChoseAccount');
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={images.applogo} style={styles.imgStyle} />
      <Text style={[appStyles.h4, {textAlign: 'center', marginTop: 35}]}>
        Sign Up
      </Text>
      <Text
        style={[
          appStyles.h5,
          {textAlign: 'center', marginTop: 8, color: colors.gray[50]},
        ]}>
        Please Sign up to continue with the app.
      </Text>
      <FormInput
        placeholder="Name"
        icon={<Nameicon />}
        onChangeText={formik.handleChange('name')}
        value={formik.values.name}
        onBlur={formik.handleBlur('name')}
        errorMessage={formik.touched.name && formik.errors.name}
      />
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
        placeholder="Referrel Code"
        icon={<Referalicon />}
        onChangeText={formik.handleChange('code')}
        value={formik.values.code}
        onBlur={formik.handleBlur('code')}
        errorMessage={formik.touched.code && formik.errors.code}
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

      <View style={[styles.boxContainer, {marginTop: 40}]}>
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
        title="Sign Up"
        customStyle={{marginTop: 30}}
        onPress={formik.handleSubmit}
      />

      <View style={styles.bottomContainer}>
        <Text style={appStyles.h7}>I already have an account!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text
            style={[
              appStyles.h7,
              {color: colors.primary, fontFamily: fonts.MontserratSemiBold},
            ]}>
            {' '}
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
    marginTop: 45,
  },

  boxContainer: {flexDirection: 'row', marginTop: 15, alignItems: 'center'},
  bottomContainer: {flexDirection: 'row', alignSelf: 'center', marginTop: 15},
});
