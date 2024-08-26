import React from 'react';
import AuthStackNavigator from './AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
