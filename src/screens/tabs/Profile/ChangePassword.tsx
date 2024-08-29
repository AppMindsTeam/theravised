import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {AppButton, FormInput} from '../../../component';
import {Lockicon} from '../../../assets/svg';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<HomeStackParamsList, 'ChangePassword'>;

const ChangePassword: React.FC<Props> = ({navigation}) => {
  const [hideoldPasswod, setHideoldPassword] = useState(true);
  const toggleoldPassword = () => setHideoldPassword(!hideoldPasswod);
  const [hidePasswod, setHidePassword] = useState(true);
  const togglePassword = () => setHidePassword(!hidePasswod);
  const [confhidePasswod, setconfHidePassword] = useState(true);
  const toggleconfPassword = () => setconfHidePassword(!confhidePasswod);
  const validationSchema = Yup.object().shape({
    oldpassword: Yup.string().required('Old-Password required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password required'),
  });

  const formik = useFormik({
    initialValues: {
      oldpassword: '',
      password: '',
      confirmpassword: '',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      //   navigation.navigate('');
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 16}}>
        <Text style={[appStyles.h4, {marginTop: 35}]}>
          Change Your Password
        </Text>
        <Text style={[appStyles.h7, {marginTop: 8}]}>
          Change your password to one that is safer and easier to remeber.
        </Text>

        <FormInput
          placeholder="Old Password"
          icon={<Lockicon />}
          containerStyle={{marginTop: 20}}
          isPassword={true}
          secureTextEntry={hideoldPasswod}
          onLeftIconPress={toggleoldPassword}
          onChangeText={formik.handleChange('oldpassword')}
          value={formik.values.oldpassword}
          onBlur={formik.handleBlur('oldpassword')}
          errorMessage={formik.touched.oldpassword && formik.errors.oldpassword}
        />
        <FormInput
          placeholder="New Password"
          icon={<Lockicon />}
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
          icon={<Lockicon />}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
    flex: 1,
  },
});

export default ChangePassword;
