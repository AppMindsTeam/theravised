import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors, fonts} from '../screens/utilities/theme';
import {BackArrow} from '../assets/svg';
import {
  AddNewClient,
  ChangePassword,
  ClientDetails,
  ClientVideo,
  EditPhysioProfile,
  EditProfile,
  Goal,
  PhysioProfile,
  ProgramListing,
  SquatProgress,
  SquatTest,
  UploadVideo,
  VideoDetail,
} from '../screens/tabs';
import ChatDetails from '../screens/tabs/Chat/ChatDetails';
import PhysioBottomTabs from './PhysioBottomNavigation';
import {useUser} from '../Hooks/UseContext';
import ClientBottomTabs from './ClientBottomNavigation';

export type HomeStackParamsList = {
  ClientBottomTabs: undefined;
  PhysioBottomTabs: undefined;
  PhysioProfile: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  ChatDetails: undefined;
  ProgramListing: undefined;
  AddNewClient: undefined;
  UploadVideo: undefined;
  EditPhysioProfile: undefined;
  SquatProgress: undefined;
  Goal: undefined;
  VideoDetail: undefined;
  ClientDetails: undefined;
  ClientVideo: undefined;
  SquatTest: undefined;
};
const HomeStackNavigator = () => {
  const HomeStack = createNativeStackNavigator<HomeStackParamsList>();
  const {user} = useUser();

  return (
    <HomeStack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        headerShadowVisible: false,
        headerTitleAlign: 'center',

        headerLeft: () => (
          <TouchableOpacity
            style={{width: 25}}
            onPress={() => navigation.goBack()}
            hitSlop={styles.hitSlop}>
            <BackArrow style={{marginTop: 0}} />
          </TouchableOpacity>
        ),

        headerStyle: styles.containerStyle,
        headerTitleStyle: styles.titleStyle,
      })}>
      {user?.userType == 'Physio' ? (
        <HomeStack.Screen
          name="PhysioBottomTabs"
          component={PhysioBottomTabs}
        />
      ) : (
        <HomeStack.Screen
          name="ClientBottomTabs"
          component={ClientBottomTabs}
        />
      )}

      <HomeStack.Screen
        name="PhysioProfile"
        component={PhysioProfile}
        options={{headerTitle: '', headerShown: false}}
      />

      <HomeStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerTitle: 'EditProfile', headerShown: true}}
      />
      <HomeStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerTitle: 'ChangePassword', headerShown: false}}
      />

      <HomeStack.Screen
        name="ChatDetails"
        component={ChatDetails}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProgramListing"
        component={ProgramListing}
        options={{
          headerTitle: 'Check These Out',
          headerShown: true,
        }}
      />

      <HomeStack.Screen
        name="AddNewClient"
        component={AddNewClient}
        options={{headerTitle: 'New Client Add?', headerShown: true}}
      />

      <HomeStack.Screen
        name="UploadVideo"
        component={UploadVideo}
        options={{headerTitle: 'Upload video', headerShown: true}}
      />

      <HomeStack.Screen
        name="EditPhysioProfile"
        component={EditPhysioProfile}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="SquatProgress"
        component={SquatProgress}
        options={{headerTitle: 'Squat Progress', headerShown: true}}
      />

      <HomeStack.Screen
        name="Goal"
        component={Goal}
        options={{
          headerTitle: 'Exercise',
          headerShown: true,
          headerStyle: {backgroundColor: colors.white},
        }}
      />

      <HomeStack.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{headerTitle: '', headerShown: false}}
      />

      <HomeStack.Screen
        name="ClientDetails"
        component={ClientDetails}
        options={{headerTitle: '', headerShown: false}}
      />

      <HomeStack.Screen
        name="ClientVideo"
        component={ClientVideo}
        options={{headerTitle: '', headerShown: false}}
      />

      <HomeStack.Screen
        name="SquatTest"
        component={SquatTest}
        options={{headerTitle: 'Squat Test', headerShown: true}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  hitSlop: {
    left: 10,
    right: 10,
    bottom: 10,
    top: 10,
  },
  titleStyle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 28,
  },
  containerStyle: {
    backgroundColor: colors.bgcolor,
  },
});
