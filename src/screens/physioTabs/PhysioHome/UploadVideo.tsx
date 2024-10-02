import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {DropDownIcon, VideoIcon} from '../../../assets/svg';
import {AppButton, FormInput} from '../../../component';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import SuccessModal from '../../../Model/SuccessModel';

type Props = NativeStackScreenProps<HomeStackParamsList, 'UploadVideo'>;

const UploadVideo: React.FC<Props> = ({navigation}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

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

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title required'),
    description: Yup.string().required('Description required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description:
        'Lorem ipsum dolor sit amet, adipiscingelit. Sed rhoncus elit malesuada ante Lorem ipsum dolor sit amet, adipiscingelit.Sed rhoncus elit malesuada ante Lorem ipsum dolor sit amet, adipiscingelit.',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      setModalVisible(true);
    },
  });

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <View style={styles.videoContainer}>
        <TouchableOpacity hitSlop={8}>
          <VideoIcon />
        </TouchableOpacity>
        <Text style={[appStyles.h8, {color: colors.gray[450], marginTop: 8}]}>
          Upload your video
        </Text>
      </View>
      <FormInput
        placeholder="Enter title"
        containerStyle={{marginTop: 40}}
        onChangeText={formik.handleChange('title')}
        value={formik.values.title}
        onBlur={formik.handleBlur('title')}
        errorMessage={formik.touched.title && formik.errors.title}
      />

      <FormInput
        placeholder="type here"
        multiline
        inputContainerStyle={styles.inputContainer}
        onChangeText={formik.handleChange('description')}
        value={formik.values.description}
        onBlur={formik.handleBlur('description')}
        errorMessage={formik.touched.description && formik.errors.description}
      />
      <View style={styles.categoryContainer}>
        <Text style={[appStyles.h6, {color: colors.primary}]}>
          {selectedCategory || 'Category'}
        </Text>
        <TouchableOpacity hitSlop={6} onPress={toggleDropdown}>
          <DropDownIcon />
        </TouchableOpacity>
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
      <AppButton
        title="Upload"
        customStyle={{marginTop: 54}}
        onPress={formik.handleSubmit}
        isLoading={false}
        disabled={!formik.isValid && formik.dirty}
      />
      <SuccessModal isVisible={isModalVisible} onClose={handleModalClose} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
  },
  videoContainer: {
    backgroundColor: colors.gray[500],
    alignItems: 'center',
    paddingVertical: 35,
    borderRadius: 12,
    marginTop: 30,
  },
  inputContainer: {
    backgroundColor: colors.bgcolor,
    height: 144,
    alignItems: 'flex-start',
  },

  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default UploadVideo;
