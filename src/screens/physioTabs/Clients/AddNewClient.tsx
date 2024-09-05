import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {Messegeicon, Nameicon, NewClientimg} from '../../../assets/svg';
import {AppButton, FormInput} from '../../../component';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<HomeStackParamsList, 'AddNewClient'>;

const AddNewClient: React.FC<Props> = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      navigation.goBack();
    },
  });
  const {name, email} = formik.values;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <NewClientimg style={styles.imgStyle} />
      <Text style={[appStyles.h4, {color: colors.primary, marginTop: 30}]}>
        Lorem ipsume dolor sit!
      </Text>
      <Text style={[appStyles.h7, styles.subtitle]}>
        Lorem ipsum dolor sit amet, adipiscing elit. Sed rhoncus elit malesuada
        ante.
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
        icon={<Messegeicon stroke={email ? colors.primary : colors.gray[50]} />}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        onBlur={formik.handleBlur('email')}
        errorMessage={formik.touched.email && formik.errors.email}
      />
      <AppButton
        title="OK"
        customStyle={{marginTop: 70}}
        onPress={formik.handleSubmit}
        isLoading={false}
        disabled={!formik.isValid ? true : false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
  },
  imgStyle: {
    alignSelf: 'center',
    marginTop: 60,
  },
  subtitle: {
    color: colors.gray[50],
    marginTop: 5,
    width: '80%',
    lineHeight: 16,
  },
});

export default AddNewClient;
