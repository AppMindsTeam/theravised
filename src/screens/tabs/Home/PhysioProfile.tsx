import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors, fonts} from '../../utilities/theme';
import {AppButton} from '../../../component';
import {BackArrow, Locationicon} from '../../../assets/svg';
import {SPECIALTY_ARRAY} from '../../../constants';

type Props = NativeStackScreenProps<HomeStackParamsList, 'PhysioProfile'>;

const PhysioProfile: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
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
      </ImageBackground>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1612943680768-d82060323fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
          }}
          style={styles.profileImage}
        />
      </View>
      <Text style={[appStyles.h4, {marginTop: 45, paddingHorizontal: 18}]}>
        Amy Miles
      </Text>
      <Text style={[appStyles.h8, {paddingHorizontal: 18, marginTop: 2}]}>
        Physiotherapist
      </Text>

      <View style={styles.clinickContainer}>
        <Text style={[appStyles.h9, styles.clinickText]}>Clinic Name</Text>
        <Locationicon />
        <Text style={[appStyles.h8, {marginLeft: 4}]}>
          Hillarys, Western Australia
        </Text>
      </View>
      <Text style={[appStyles.h6, {paddingHorizontal: 18, marginTop: 8}]}>
        Specialty
      </Text>
      <View style={styles.specialtyContaienr}>
        {SPECIALTY_ARRAY.map(text => {
          return (
            <View style={{backgroundColor: colors.white, borderRadius: 12}}>
              <Text style={styles.textContaienr}>{text}</Text>
            </View>
          );
        })}
      </View>

      <Text style={[appStyles.h6, {paddingHorizontal: 18, marginTop: 12}]}>
        About me
      </Text>
      <Text style={[appStyles.h7, styles.paragraph]}>
        Physiotherapy helps to restore movement and function when someone is
        affected by injury, illness or disability. It can also help to reduce
        your risk of injury or illness in the future. It takes a holistic
        approach that involves the patient directly in their own care.
      </Text>
      <AppButton
        title="Book Apointment"
        customStyle={{marginHorizontal: 18, marginTop: 30}}
      />
      <AppButton
        title="Chat"
        customStyle={{marginHorizontal: 18, marginTop: 15}}
      />
    </View>
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
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  paragraph: {
    paddingLeft: 18,
    paddingRight: 25,
    marginTop: 4,
    color: colors.gray[400],
    lineHeight: 16,
  },
  ArrowButton: {
    marginLeft: 18,
    marginTop: 45,
  },
  clinickText: {
    color: colors.green,
    marginTop: 4,
    paddingRight: 6,
    paddingBottom: 2,
  },
  specialtyContaienr: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 18,
    marginTop: 12,
  },
  textContaienr: {
    color: colors.black,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 12,
    fontFamily: fonts.MontserratMedium,
  },
  clinickContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
});

export default PhysioProfile;
