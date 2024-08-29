import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/BottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import ProfileHeader from '../../../component/profile/ProfileHeader';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Profile'
>;

const Profile: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <ProfileHeader onPress={() => navigation.navigate('EditProfile')} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
});
