import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors, fonts} from '../utilities/theme';
import {AppButton} from '../../component';
import {AccountImg} from '../../assets/svg';

type Props = NativeStackScreenProps<AuthStackParamList, 'ChoseAccount'>;

const ChoseAccount: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
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
        />
        <AppButton
          title="Client"
          customStyle={styles.containerStyle2}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('SignIn')}
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
    height: 35,
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
