import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {appStyles, colors} from '../utilities/theme';
import {AppButton} from '../../component';
import {Successimg} from '../../assets/svg';

type Props = NativeStackScreenProps<AuthStackParamList, 'PasswordSuccess'>;

const PasswordSuccess: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={images.applogo} style={styles.logoStyle} />
      <Successimg style={{marginTop: 58}} />
      <Text style={[appStyles.h4, {marginTop: 30, color: colors.primary}]}>
        Change Password Successfully!
      </Text>
      <Text style={[appStyles.h7, {marginTop: 8, width: '82%'}]}>
        You have successfully change password. Please use the new password when
        sign in
      </Text>

      <AppButton
        title="Ok"
        customStyle={{marginTop: 80}}
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default PasswordSuccess;

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
});
