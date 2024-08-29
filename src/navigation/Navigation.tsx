import React from 'react';
import AuthStackNavigator from './AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './HomeNavigation';
import {useUser} from '../Hooks/UseContext';

const Navigation = () => {
  const {user} = useUser();
  // console.log('user-----', user);

  return (
    <NavigationContainer>
      {user?.id ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
