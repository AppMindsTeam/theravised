import React from 'react';
import AuthStackNavigator from './AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './HomeNavigation';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
      {/* <HomeStackNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigation;
