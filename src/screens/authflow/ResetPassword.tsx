import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors, fonts} from '../utilities/theme';
import {AppButton, AuthHeader, FormInput} from '../../component';
import {Lockicon} from '../../assets/svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<AuthStackParamList, 'ResetPassword'>;

const ResetPassword: React.FC<Props> = ({navigation}) => {
  const [hidePasswod, setHidePassword] = useState(true);
  const togglePassword = () => setHidePassword(!hidePasswod);
  const [confhidePasswod, setconfHidePassword] = useState(true);
  const toggleconfPassword = () => setconfHidePassword(!confhidePasswod);
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password required'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmpassword: '',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      navigation.navigate('PasswordSuccess');
    },
  });
  const {password, confirmpassword} = formik.values;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 16}}>
          {/* <Image source={images.applogo} style={styles.logoStyle} /> */}
          <AuthHeader onPress={() => navigation.goBack()} />

          <Text style={[appStyles.h4, {marginTop: 40}]}>
            Reset Your Password
          </Text>
          <Text style={[appStyles.h7, {marginTop: 8}]}>
            The password must be different than before
          </Text>

          <FormInput
            placeholder="New Password"
            icon={
              <Lockicon stroke={password ? colors.primary : colors.gray[50]} />
            }
            containerStyle={{marginTop: 20}}
            isPassword={true}
            secureTextEntry={hidePasswod}
            onLeftIconPress={togglePassword}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            onBlur={formik.handleBlur('password')}
            errorMessage={formik.touched.password && formik.errors.password}
          />
          <FormInput
            placeholder="Confirm Password"
            icon={
              <Lockicon
                stroke={confirmpassword ? colors.primary : colors.gray[50]}
              />
            }
            isPassword={true}
            secureTextEntry={confhidePasswod}
            onLeftIconPress={toggleconfPassword}
            onChangeText={formik.handleChange('confirmpassword')}
            value={formik.values.confirmpassword}
            onBlur={formik.handleBlur('confirmpassword')}
            errorMessage={
              formik.touched.confirmpassword && formik.errors.confirmpassword
            }
          />
          <AppButton
            title="Confirm"
            customStyle={{marginTop: 140}}
            onPress={formik.handleSubmit}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ResetPassword;

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
});
