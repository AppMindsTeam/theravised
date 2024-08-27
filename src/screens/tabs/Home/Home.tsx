import React from 'react';
import {Text, View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/BottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {Goal, ProgressList} from '../../../component';
import {Goalicon, PhysioProfile} from '../../../assets/svg';
import {PROGRESSITEM} from '../../../constants';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Home'
>;

const Home: React.FC<Props> = ({navigation}) => {
  const projects = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <Text style={[appStyles.h4, {marginTop: 20, paddingHorizontal: 18}]}>
        Hi Lachie,
      </Text>
      <Goal icon={<PhysioProfile />} isGoal={false} />
      <Text style={[appStyles.h4, {marginTop: 20, paddingHorizontal: 18}]}>
        Goals
      </Text>
      <Goal icon={<Goalicon />} isGoal={true} />
      <Text style={[appStyles.h4, {marginTop: 60, paddingHorizontal: 18}]}>
        My Progress
      </Text>

      <View style={{backgroundColor: colors.bgcolor}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.completedTaskContainer}
          horizontal>
          {PROGRESSITEM.map((item, index) => (
            <ProgressList
              key={index}
              title={item.title}
              date={item.date}
              ImageUrl={item.ImageUrl}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flex: 1,
  },
  completedTaskContainer: {
    gap: 10,
    marginTop: 15,
    paddingHorizontal: 18,
  },
});

export default Home;
