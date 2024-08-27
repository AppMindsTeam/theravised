import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/BottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {Goal} from '../../../component';
import {Goalicon, PhysioProfile} from '../../../assets/svg';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Home'
>;

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <Text style={[appStyles.h4, {marginTop: 20}]}>Hi Lachie,</Text>
      <Goal icon={<PhysioProfile />} isGoal={false} />
      <Text style={[appStyles.h4, {marginTop: 20}]}>Goals</Text>
      <Goal icon={<Goalicon />} isGoal={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
    flex: 1,
  },
});

export default Home;
