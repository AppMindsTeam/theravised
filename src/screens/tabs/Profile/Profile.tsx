import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/ClientBottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import ProfileHeader from '../../../component/profile/ProfileHeader';
import {ProfileItem} from '../../../component';
import {Deleteicon, LogOutIcon, Passwordicon} from '../../../assets/svg';
import {useUser} from '../../../Hooks/UseContext';
import ConfirmationModal from '../../../Model/ConfirmationModal';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Profile'
>;

const Profile: React.FC<Props> = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLogOutModel, setLogOutModal] = useState(false);
  const {setUser, user} = useUser();

  const handleProfileNavigation = () => {
    {
      user?.userType == 'Physio'
        ? navigation.navigate('EditPhysioProfile')
        : navigation.navigate('EditProfile');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />

      <ProfileHeader onPress={handleProfileNavigation} />

      <ProfileItem
        title="Change Password"
        Icon={<Passwordicon />}
        containerStyle={{marginTop: 60}}
        onPress={() => navigation.navigate('ChangePassword')}
      />
      <ProfileItem
        title="Delete Account"
        Icon={<Deleteicon />}
        onPress={() => setModalVisible(true)}
      />
      <ProfileItem
        title="Log Out"
        onPress={() => setLogOutModal(true)}
        Icon={<LogOutIcon style={{width: 10, height: 10}} />}
      />
      <ConfirmationModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        isDeleteAccount
        onPress={() => {
          setLogOutModal(false);
          setTimeout(() => {}, 500);
        }}
      />
      <ConfirmationModal
        isVisible={isLogOutModel}
        onClose={() => setLogOutModal(false)}
        onPress={() => {
          setLogOutModal(false);
          setTimeout(() => {
            setUser({
              id: '',
              name: '',
              email: '',
              password: '',
              referalCode: '',
            });
          }, 500);
        }}
      />
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
