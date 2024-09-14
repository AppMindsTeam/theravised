import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from '../assets/images';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../screens/utilities/theme';
import {Home, Messege, Profile, Programs} from '../screens/tabs';

export type BottomTabParamlist = {
  Home: undefined;
  Messege: undefined;
  Programs: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamlist>();

function ClientBottomTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: 'center',
        headerShown: false,

        tabBarIcon: ({color, size, focused}) => {
          let source;
          switch (route.name) {
            case 'Home':
              source = images.home;
              color = focused ? colors.primary : colors.gray[50];
              break;
            case 'Messege':
              source = images.chat;
              color = focused ? colors.primary : colors.gray[50];
              break;
            case 'Programs':
              source = images.program;
              color = focused ? colors.primary : colors.gray[50];
              break;
            case 'Profile':
              source = images.profile;
              color = focused ? colors.primary : colors.gray[50];
              break;
          }
          return (
            <Image
              resizeMode="contain"
              style={[styles.icon, {tintColor: color}]}
              source={source}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />

      <Tab.Screen
        name="Messege"
        component={Messege}
        options={{tabBarLabel: 'Message'}}
      />

      <Tab.Screen
        name="Programs"
        component={Programs}
        options={{
          tabBarLabel: 'Programs',
          headerShown: true,
          headerTitle: 'Lachie s Program',
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: true,
          headerTitle: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
  tabBarStyle: {
    paddingTop: 20,
  },
  headerTitleStyle: {
    color: colors.black,
    fontSize: 18,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 20,
  },
  tabBarLabelStyle: {marginTop: 12},
  headerStyle: {
    backgroundColor: colors.bgcolor,
  },
  hitSlop: {
    left: 10,
    right: 10,
    bottom: 10,
    top: 10,
  },
});

export default ClientBottomTabs;
