import {FlatList, StatusBar, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/BottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import {ChatItem, Header, SearchBar} from '../../../component';
import {CHATARRAY} from '../../../constants';
import {Filltericon} from '../../../assets/svg';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Program'
>;

const Program: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
    </View>
  );
};

export default Program;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 22,
    paddingTop: 18,
  },
  list: {
    marginTop: 15,
    paddingBottom: 30,
  },
});
