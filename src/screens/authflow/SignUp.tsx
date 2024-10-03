import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors, fonts} from '../utilities/theme';
import {AppButton, BottomLine, FormInput} from '../../component';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Lockicon, Messegeicon, Nameicon, Referalicon} from '../../assets/svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useUser} from '../../Hooks/UseContext';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const SignUp: React.FC<Props> = ({navigation}) => {
  const {setUser, user} = useUser();
  const [hidePasswod, setHidePassword] = useState(true);
  const togglePassword = () => setHidePassword(!hidePasswod);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    code: Yup.string().required('Referral-Code required'),
    password: Yup.string().required('Password is required'),
    terms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('Terms and conditions are required'),
    policy: Yup.boolean()
      .oneOf([true], 'You must accept the privacy policy')
      .required('Privacy policy acceptance is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      code: '',
      password: '',
      terms: false,
      policy: false,
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      setUser({
        id: '1234',
        email: 'shan@gmail.com',
        name: 'shan',
        password: '000000',
        referalCode: '1234',
        userType: user?.userType || 'Client',
      });
    },
  });
  const {name, email, code, password} = formik.values;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 16}}>
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
            icon={<Nameicon fill={name ? colors.primary : colors.gray[50]} />}
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
            onBlur={formik.handleBlur('name')}
            errorMessage={formik.touched.name && formik.errors.name}
          />
          <FormInput
            placeholder="abc@gmail.com"
            keyboardType="email-address"
            icon={
              <Messegeicon stroke={email ? colors.primary : colors.gray[50]} />
            }
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            onBlur={formik.handleBlur('email')}
            errorMessage={formik.touched.email && formik.errors.email}
          />
          <FormInput
            placeholder="Referrel Code"
            icon={
              <Referalicon fill={name ? colors.primary : colors.gray[50]} />
            }
            onChangeText={formik.handleChange('code')}
            value={formik.values.code}
            onBlur={formik.handleBlur('code')}
            errorMessage={formik.touched.code && formik.errors.code}
          />
          <FormInput
            placeholder="Password"
            icon={
              <Lockicon stroke={password ? colors.primary : colors.gray[50]} />
            }
            isPassword={true}
            secureTextEntry={hidePasswod}
            onLeftIconPress={togglePassword}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            onBlur={formik.handleBlur('password')}
            errorMessage={formik.touched.password && formik.errors.password}
          />

          <BouncyCheckbox
            size={18}
            textStyle={styles.textStyle}
            style={{marginTop: 25}}
            iconImageStyle={styles.iconImageStyle}
            fillColor={colors.primary}
            unFillColor={'transparent'}
            iconStyle={{borderRadius: 6}}
            innerIconStyle={{borderRadius: 6}}
            text={'I accept the Terms & Conditions'}
            isChecked={formik.values.terms}
            onPress={() => formik.setFieldValue('terms', !formik.values.terms)}
          />
          <BouncyCheckbox
            size={18}
            textStyle={styles.textStyle}
            style={{marginTop: 12}}
            iconImageStyle={styles.iconImageStyle}
            fillColor={colors.primary}
            unFillColor={'transparent'}
            iconStyle={{borderRadius: 6}}
            innerIconStyle={{borderRadius: 6}}
            text={'I accept the Privacy Policy'}
            isChecked={formik.values.policy}
            onPress={() =>
              formik.setFieldValue('policy', !formik.values.policy)
            }
          />
          <AppButton
            title="Sign Up"
            customStyle={{marginTop: 30}}
            onPress={formik.handleSubmit}
            isLoading={false}
            disabled={!formik.isValid ? true : false}
          />
          <BottomLine
            onPress={() => navigation.navigate('SignIn')}
            title=" Sign In"
          />
        </ScrollView>
      </SafeAreaView>
    </View>
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
    width: 200,
    height: 46,
    alignSelf: 'center',
    marginTop: 41,
  },
  textStyle: {
    color: colors.gray[50],
    textDecorationLine: 'none',
    fontSize: 12,
    fontFamily: fonts.MontserratRegular,
  },
  iconImageStyle: {
    width: 10,
    height: 10,
  },
});
