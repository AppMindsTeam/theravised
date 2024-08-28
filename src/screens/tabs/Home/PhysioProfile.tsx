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
import {BackArrow} from '../../../assets/svg';

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow style={styles.ArrowButton} />
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
      <Text style={[appStyles.h4, {marginTop: 60, paddingHorizontal: 18}]}>
        Amy Miles
      </Text>
      <Text style={[appStyles.h9, {paddingHorizontal: 18, marginTop: 4}]}>
        amymiles123@gmail.com
      </Text>
      <Text style={[appStyles.h5, styles.paragraph]}>
        Physiotherapy helps to restore movement and function when someone is
        affected by injury, illness or disability. It can also help to reduce
        your risk of injury or illness in the future. It takes a holistic
        approach that involves the patient directly in their own care.
      </Text>
      <AppButton
        title="Chat"
        customStyle={{marginHorizontal: 18, marginTop: 80}}
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
    marginTop: 15,
    color: colors.black,
    lineHeight: 18,
  },
  ArrowButton: {
    marginLeft: 18,
    marginTop: 45,
  },
});

export default PhysioProfile;
