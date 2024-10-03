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
import {AppButton, BottomLine, FormInput} from '../../component';
import {Checkbox, Lockicon, Messegeicon} from '../../assets/svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useUser} from '../../Hooks/UseContext';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignIn: React.FC<Props> = ({navigation}) => {
  const {setUser, user} = useUser();
  const [hidePasswod, setHidePassword] = useState(true);

  const togglePassword = () => setHidePassword(!hidePasswod);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
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
      email: '',
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
  const {password, email} = formik.values;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 16}}>
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
          icon={
            <Messegeicon stroke={email ? colors.primary : colors.gray[50]} />
          }
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          onBlur={formik.handleBlur('email')}
          errorMessage={formik.touched.email && formik.errors.email}
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
        <TouchableOpacity
          style={styles.forgotContainer}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Checkbox />
          <Text style={[appStyles.h6, {marginLeft: 5}]}>Forgot Password?</Text>
        </TouchableOpacity>

        <BouncyCheckbox
          size={18}
          textStyle={styles.textStyle}
          style={{marginTop: 25}}
          iconStyle={{borderRadius: 6}}
          innerIconStyle={{borderRadius: 6}}
          iconImageStyle={styles.iconImageStyle}
          fillColor={colors.primary}
          unFillColor={'transparent'}
          text={'I accept the Terms & Conditions'}
          isChecked={formik.values.terms}
          onPress={() => formik.setFieldValue('terms', !formik.values.terms)}
        />
        <BouncyCheckbox
          size={18}
          textStyle={styles.textStyle}
          style={{marginTop: 12}}
          iconImageStyle={styles.iconImageStyle}
          iconStyle={{borderRadius: 6}}
          innerIconStyle={{borderRadius: 6}}
          fillColor={colors.primary}
          unFillColor={'transparent'}
          text={'I accept the Privacy Policy'}
          isChecked={formik.values.policy}
          onPress={() => formik.setFieldValue('policy', !formik.values.policy)}
        />
        <AppButton
          title="Login"
          customStyle={{marginTop: 25}}
          onPress={formik.handleSubmit}
          isLoading={false}
          disabled={!formik.isValid && formik.dirty}
        />

        <BottomLine
          onPress={() => navigation.navigate('SignUp')}
          title=" Sign Up"
        />
      </ScrollView>
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
    width: 200,
    height: 46,
    alignSelf: 'center',
    marginTop: 84,
  },

  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  textStyle: {
    color: colors.gray[50],
    textDecorationLine: 'none',
    fontSize: 12,
    fontFamily: fonts.MontserratMedium,
  },
  iconImageStyle: {
    width: 10,
    height: 10,
  },
});
