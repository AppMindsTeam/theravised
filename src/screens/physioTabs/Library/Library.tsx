import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {PhysioBottomTabParamlist} from '../../../navigation/PhysioBottomNavigation';

type Props = NativeStackScreenProps<
  PhysioBottomTabParamlist & HomeStackParamsList,
  'Library'
>;

const Library: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to Physio_Library-Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default Library;
