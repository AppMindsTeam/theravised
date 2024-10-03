import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors, fonts} from '../utilities/theme';
import {AppButton} from '../../component';
import {AccountImg} from '../../assets/svg';
import {useUser} from '../../Hooks/UseContext';

type Props = NativeStackScreenProps<AuthStackParamList, 'ChoseAccount'>;

const ChoseAccount: React.FC<Props> = ({navigation}) => {
  const {setUser, user} = useUser();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <SafeAreaView />
      <Image source={images.applogo} style={styles.logoStyle} />
      <AccountImg style={{marginTop: 65}} />
      <Text style={[appStyles.h1, {marginTop: 15}]}>Lorem ipsum</Text>
      <Text style={[appStyles.h3, {marginTop: 8}]}>
        Lorem ipsum dolor sit amet, adipiscing elit. Sed rhoncus elit malesuada
        ante.
      </Text>
      <Text style={[appStyles.h2, {marginTop: 50}]}>
        Who Are You Joining As?
      </Text>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Physiotherpist"
          customStyle={styles.containerStyle}
          titleStyle={appStyles.h6}
          onPress={() => {
            navigation.navigate('SignIn');
            setUser({userType: 'Physio'});
          }}
        />
        <AppButton
          title="Client"
          customStyle={styles.containerStyle2}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            navigation.navigate('SignIn');
            setUser({userType: 'Client'});
          }}
        />
      </View>
    </View>
  );
};

export default ChoseAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
  },
  logoStyle: {
    width: 200,
    height: 46,
    alignSelf: 'center',
    marginTop: 60,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  containerStyle: {
    backgroundColor: colors.bgcolor,
    width: '45%',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  containerStyle2: {
    width: '45%',
  },

  buttonTitle: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
  },
});
