import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {BackArrow, PlayIcon} from '../../../assets/svg';
import {AppButton, FormInput} from '../../../component';
import PopUpModel from '../../../Model/PopUpModel';
import WeightModel from '../../../Model/WeightModel';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<HomeStackParamsList, 'ClientVideo'>;

const ClientVideo: React.FC<Props> = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isRapModalVisible, setRapModalVisible] = useState(false);
  const [isWeightModalVisible, setWeightModalVisible] = useState(false);
  const validationSchema = Yup.object().shape({
    description: Yup.string().required('Description required'),
  });

  const formik = useFormik({
    initialValues: {
      description:
        'Lorem ipsum dolor sit amet, adipiscingelit.Sed rhoncus elit malesuada ante Lorem ipsum dolor sit amet, adipiscingelit.Sed rhoncus elit malesuada ante Lorem ipsum dolor sit amet,adipiscingelit.',
    },

    validationSchema: validationSchema,
    onSubmit: values => {},
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
          barStyle={'dark-content'}
        />
        <ImageBackground
          style={styles.mainImage}
          source={{
            uri: 'https://media.istockphoto.com/id/2156911926/photo/physiotherapy-senior-man-and-stretching-leg-for-knee-injury-medical-and-consultant-with.jpg?s=612x612&w=0&k=20&c=xiZzAJW__jIMsZtqOQoPdKYxPMGpEoJlTBLqOvfxR18=',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.ArrowButton}
            hitSlop={10}>
            <BackArrow />
          </TouchableOpacity>
          <TouchableOpacity>
            <PlayIcon style={{alignSelf: 'center', top: 20}} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{paddingHorizontal: 18, marginTop: 15}}>
          <Text style={[appStyles.h6, {color: colors.black}]}>
            Enter video title
          </Text>
          <Text style={[appStyles.h8, {color: colors.gray[50], marginTop: 5}]}>
            Min 5 chars - Max 60 chars
          </Text>
          {/* ---------------------------------------------------------------------------------------------- */}
          <View style={styles.arrowContainer}>
            <Text style={appStyles.h4}>Sets</Text>
            <TouchableOpacity
              style={styles.popContainer}
              onPress={() => setModalVisible(true)}>
              <Text style={[appStyles.h9, {color: colors.black, marginTop: 2}]}>
                3 sets
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.arrowContainer}>
            <Text style={appStyles.h4}>Reps</Text>
            <TouchableOpacity
              style={styles.popContainer}
              onPress={() => setRapModalVisible(true)}>
              <Text style={[appStyles.h9, {color: colors.black, marginTop: 2}]}>
                1 rep
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.arrowContainer}>
            <Text style={appStyles.h4}>load</Text>
            <TouchableOpacity
              style={styles.popContainer}
              onPress={() => setWeightModalVisible(true)}>
              <Text style={[appStyles.h9, {color: colors.black, marginTop: 2}]}>
                1 kg
              </Text>
            </TouchableOpacity>
          </View>
          {/* ------------------------------------------------------------------------------------------- */}
          <Text style={[appStyles.h4, {marginTop: 25}]}>Description</Text>
          <FormInput
            placeholder="Write Description"
            multiline
            inputContainerStyle={styles.inputContainer}
            onChangeText={formik.handleChange('description')}
            value={formik.values.description}
            onBlur={formik.handleBlur('description')}
            errorMessage={
              formik.touched.description && formik.errors.description
            }
          />
          <AppButton
            title="Save"
            customStyle={{marginTop: 55}}
            onPress={formik.handleSubmit}
          />
          <PopUpModel
            isVisible={isModalVisible}
            onClose={() => setModalVisible(false)}
            modalType={true}
          />
          <PopUpModel
            isVisible={isRapModalVisible}
            onClose={() => setRapModalVisible(false)}
          />
          <WeightModel
            isVisible={isWeightModalVisible}
            onClose={() => setWeightModalVisible(false)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  mainImage: {
    height: 250,
    width: '100%',
  },
  ArrowButton: {
    marginLeft: 18,
    marginTop: 45,
  },
  popContainer: {
    backgroundColor: colors.gray[150],
    width: 60,
    height: 25,
    borderRadius: 4,
    alignItems: 'center',
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  inputContainer: {
    height: 135,
    backgroundColor: colors.white,
    alignItems: 'flex-start',
  },
});

export default ClientVideo;
