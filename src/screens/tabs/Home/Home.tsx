import React from 'react';
import {Text, View, StyleSheet, StatusBar, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/ClientBottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {CalenderCard, Goal, MyProgressItem} from '../../../component';
import {Goalicon, PhysioProfile} from '../../../assets/svg';
import {PROGRESSITEM} from '../../../constants';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Home'
>;

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <Text style={[appStyles.h4, {marginTop: 37, paddingHorizontal: 18}]}>
        Hi Lachie, here
      </Text>
      <Goal
        icon={<PhysioProfile />}
        isGoal={false}
        onPress={() => navigation.navigate('PhysioProfile')}
      />
      <Text style={[appStyles.h4, {marginTop: 20, paddingHorizontal: 18}]}>
        Goals
      </Text>
      <Goal
        icon={<Goalicon />}
        isGoal={true}
        onPress={() => navigation.navigate('Goal')}
      />
      <Text style={[appStyles.h4, {marginTop: 20, paddingHorizontal: 18}]}>
        Weekly Activity
      </Text>
      <CalenderCard isCalender={true} />

      <Text style={[appStyles.h4, {marginTop: 20, paddingHorizontal: 18}]}>
        My Progress
      </Text>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PROGRESSITEM}
          keyExtractor={item => item.title}
          renderItem={({item, index}) => (
            <MyProgressItem
              key={index}
              title={item.title}
              ImageUrl={item.ImageUrl}
              onPress={() => {
                if (index === 0) {
                  navigation.navigate('SquatProgress');
                }
              }}
            />
          )}
          contentContainerStyle={styles.list}
        />
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
  list: {
    marginTop: 15,
    paddingBottom: 30,
    gap: 10,
    paddingHorizontal: 18,
  },
});

export default Home;
