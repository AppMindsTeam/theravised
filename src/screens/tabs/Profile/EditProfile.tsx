import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import {Addimgicon, Messegeicon, Nameicon} from '../../../assets/svg';
import {AppButton, FormInput} from '../../../component';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<HomeStackParamsList, 'EditProfile'>;

const EditProfile: React.FC<Props> = ({navigation}) => {
  const [profileImage, setProfileImage] = useState('');
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
  });

  const formik = useFormik({
    initialValues: {
      name: 'Lachie Fraser',
      email: 'Lachie123@gmail.com',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      navigation.goBack();
    },
  });

  const handleImagePicker = () => {
    ImageCropPicker.openPicker({
      cropping: true,
      multiple: false,
    })
      .then(image => {
        setProfileImage(image.path);
      })
      .catch(error => {
        console.log('Error opening image picker:', error);
      });
  };
  const {email, name} = formik.values;
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 16}}>
        <View style={styles.imageWrapper}>
          <Image
            source={
              profileImage
                ? {uri: profileImage}
                : {
                    uri: 'https://images.unsplash.com/photo-1612943680768-d82060323fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
                  }
            }
            style={styles.imgStyle}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            hitSlop={10}
            onPress={handleImagePicker}
            style={styles.addIconStyle}>
            <Addimgicon width={24} height={24} />
          </TouchableOpacity>
        </View>
        <FormInput
          icon={<Nameicon fill={name ? colors.primary : colors.gray[50]} />}
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
          onBlur={formik.handleBlur('name')}
          errorMessage={formik.touched.name && formik.errors.name}
          containerStyle={{marginTop: 40}}
        />
        <FormInput
          placeholder="abc@gmail.com"
          icon={
            <Messegeicon stroke={email ? colors.primary : colors.gray[50]} />
          }
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          onBlur={formik.handleBlur('email')}
          errorMessage={formik.touched.email && formik.errors.email}
          editable={false}
        />
        <AppButton
          title="Update"
          customStyle={{marginTop: 100}}
          onPress={formik.handleSubmit}
          isLoading={false}
          disabled={!formik.isValid ? true : false}
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
  imageWrapper: {
    width: 98,
    height: 98,
    borderRadius: 98 / 2,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    marginTop: 20,
    alignSelf: 'center',
  },
  imgStyle: {
    width: 86,
    height: 86,
    borderRadius: 100,
  },
  addIconStyle: {
    position: 'absolute',
    right: -5,
    bottom: 8,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 100,
  },
});

export default EditProfile;
