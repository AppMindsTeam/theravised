import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {
  AddIcon,
  Addimgicon,
  BackArrow,
  Cameraicon,
  ClinikIcon,
  DropDownIcon,
  LocationIcon2,
  Nameicon,
  QualificationIcon,
  SpecialityIcon,
} from '../../../assets/svg';
import {AppButton, FormInput} from '../../../component';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import ImageCropPicker from 'react-native-image-crop-picker';

type Props = NativeStackScreenProps<HomeStackParamsList, 'EditPhysioProfile'>;

const EditPhysioProfile: React.FC<Props> = ({navigation}) => {
  const [profileImage, setProfileImage] = useState('');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
    qualification: Yup.string().required('Qualification required'),
    clinik: Yup.string().required('Clinik-Name required'),
    location: Yup.string().required('Location required'),
    description: Yup.string().required('Description required'),
  });

  const formik = useFormik({
    initialValues: {
      name: 'Lachie Fraser',
      qualification: 'Qualification',
      clinik: 'Clinic Name',
      location: 'Hillarys, Western Australia',
      description:
        'Physiotherapy helps to restore movement and function when someone is affected by injury,illness or disability.It can also help to reduce your risk of injury or illness in the future.',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      navigation.goBack();
    },
  });
  const {name, qualification, clinik, location} = formik.values;
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
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [
    'ACL injuries',
    'Knee pain',
    'Ankle pain',
    'Elbow injuries',
    'Musculoskeletal',
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setDropdownVisible(false);
  };

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 32}}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <ImageBackground
        style={styles.mainImage}
        source={{
          uri: 'https://media.istockphoto.com/id/2021352816/photo/childrens-physiotherapy.jpg?s=2048x2048&w=is&k=20&c=7x-qFlmBzR-CR-aumDGfEtvYHhTLGg1HoMjfI9m4hsE=',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.ArrowButton}
          hitSlop={10}>
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity>
          <Cameraicon style={{alignSelf: 'center', marginTop: 40}} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.profileContainer}>
        <Image
          source={
            profileImage
              ? {uri: profileImage}
              : {
                  uri: 'https://images.unsplash.com/photo-1612943680768-d82060323fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
                }
          }
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.addIcon} onPress={handleImagePicker}>
          <Addimgicon />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 18}}>
        <FormInput
          containerStyle={{marginTop: 40}}
          icon={<Nameicon fill={name ? colors.primary : colors.gray[50]} />}
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
          onBlur={formik.handleBlur('name')}
          errorMessage={formik.touched.name && formik.errors.name}
        />
        <FormInput
          containerStyle={{marginTop: -10}}
          icon={
            <QualificationIcon
              fill={qualification ? colors.primary : colors.gray[50]}
            />
          }
          onChangeText={formik.handleChange('qualification')}
          value={formik.values.qualification}
          onBlur={formik.handleBlur('qualification')}
          errorMessage={
            formik.touched.qualification && formik.errors.qualification
          }
        />
        <FormInput
          containerStyle={{marginTop: -10}}
          icon={<ClinikIcon fill={clinik ? colors.primary : colors.gray[50]} />}
          onChangeText={formik.handleChange('clinik')}
          value={formik.values.clinik}
          onBlur={formik.handleBlur('clinik')}
          errorMessage={formik.touched.clinik && formik.errors.clinik}
        />
        <FormInput
          containerStyle={{marginTop: -10}}
          icon={
            <LocationIcon2 fill={location ? colors.primary : colors.gray[50]} />
          }
          onChangeText={formik.handleChange('location')}
          value={formik.values.location}
          onBlur={formik.handleBlur('location')}
          errorMessage={formik.touched.location && formik.errors.location}
        />

        <View style={styles.categoryContainer}>
          <SpecialityIcon />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              marginLeft: 8,
            }}>
            <Text style={appStyles.h6}>{selectedCategory || 'Category'}</Text>
            <TouchableOpacity hitSlop={6} onPress={toggleDropdown}>
              <DropDownIcon />
            </TouchableOpacity>
          </View>
        </View>
        {dropdownVisible && (
          <View style={styles.dropdown}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleCategorySelect(category)}>
                <Text style={appStyles.h5}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <FormInput
          placeholder="Description"
          textAlignVertical="top"
          multiline={true}
          containerStyle={{marginTop: -10}}
          inputContainerStyle={{
            height: 151,
            alignItems: 'flex-start',
          }}
          onChangeText={formik.handleChange('description')}
          value={formik.values.description}
          onBlur={formik.handleBlur('description')}
          errorMessage={formik.touched.description && formik.errors.description}
        />
        <AppButton
          title="Update"
          customStyle={{marginTop: 60, marginBottom: 16}}
          onPress={formik.handleSubmit}
          isLoading={false}
          disabled={!formik.isValid ? true : false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flex: 1,
  },
  mainImage: {
    height: 250,
    width: '100%',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileContainer: {
    width: 84,
    height: 84,
    borderWidth: 2,
    borderColor: colors.bgcolor,
    position: 'absolute',
    left: 20,
    top: 208,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 84 / 2,
  },
  ArrowButton: {
    marginLeft: 18,
    marginTop: 45,
  },
  addIcon: {
    position: 'absolute',
    right: -8,
    bottom: 10,
  },
  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
  dropdown: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    backgroundColor: colors.bgcolor,
  },
  dropdownItem: {
    paddingVertical: 6,
  },
});

export default EditPhysioProfile;
