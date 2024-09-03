import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from '../assets/images';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../screens/utilities/theme';
import {
  Clients,
  Home,
  Library,
  Messege,
  PhysioHome,
  Profile,
} from '../screens/tabs';
import {Addimgicon} from '../assets/svg';

export type PhysioBottomTabParamlist = {
  PhysioHome: undefined;
  Messege: undefined;
  Clients: undefined;
  Library: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<PhysioBottomTabParamlist>();

function PhysioBottomTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="PhysioHome"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: 'center',
        headerShown: false,
        headerRight: () => (
          <TouchableOpacity
            style={{width: 25, marginRight: 18}}
            hitSlop={styles.hitSlop}>
            <Addimgicon />
          </TouchableOpacity>
        ),

        tabBarIcon: ({color, size, focused}) => {
          let source;
          switch (route.name) {
            case 'PhysioHome':
              source = images.home;
              color = focused ? colors.primary : colors.gray[50];
              break;
            case 'Messege':
              source = images.chat;
              color = focused ? colors.primary : colors.gray[50];
              break;
            case 'Clients':
              source = images.clients;
              color = focused ? colors.primary : colors.gray[50];
              break;
            case 'Library':
              source = images.library;
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
        name="PhysioHome"
        component={PhysioHome}
        options={{
          tabBarLabel: 'Home',
          headerShown: true,
          headerTitle: 'Hi Lachie,',
          headerTitleAlign: 'left',
        }}
      />

      <Tab.Screen
        name="Messege"
        component={Messege}
        options={{tabBarLabel: 'Message'}}
      />

      <Tab.Screen
        name="Clients"
        component={Clients}
        options={{tabBarLabel: 'Clients'}}
      />

      <Tab.Screen
        name="Library"
        component={Library}
        options={{tabBarLabel: 'Explore Library'}}
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

export default PhysioBottomTabs;
