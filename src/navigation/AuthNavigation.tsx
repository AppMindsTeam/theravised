import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {
  ChoseAccount,
  ForgotPassword,
  Onboard,
  OTPScreen,
  PasswordSuccess,
  ResetPassword,
  SignIn,
  SignUp,
} from '../screens/authflow';

export type AuthStackParamList = {
  Onboard: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ChoseAccount: undefined;
  ForgotPassword: undefined;
  OTPScreen: undefined;
  ResetPassword: undefined;
  PasswordSuccess: undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        headerShadowVisible: false,
        headerTitleAlign: 'left',
        headerStyle: {backgroundColor: 'red'},
        headerTitleStyle: {
          fontSize: 20,
          color: 'black',
          lineHeight: 28,
        },
      })}>
      <AuthStack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ChoseAccount"
        component={ChoseAccount}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="PasswordSuccess"
        component={PasswordSuccess}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
