import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/BottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import {ProgramItem, SearchBar} from '../../../component';
import {Filltericon} from '../../../assets/svg';
import {PROGRAM_ARRAY} from '../../../constants/ProgramArray';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Programs'
>;

const Programs: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <View style={styles.searchContainer}>
        <SearchBar containerStyle={{width: '84%', height: 40}} />
        <TouchableOpacity>
          <Filltericon />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={PROGRAM_ARRAY}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <ProgramItem
            title={item.title}
            date={item.date}
            time={item.time}
            ImageUrl={item.ImageUrl}
            description={item.description}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
};

export default Programs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 22,
    paddingTop: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
  },
  contentContainerStyle: {
    gap: 12,
    paddingBottom: 30,
    paddingVertical: 5,
    marginTop: 12,
  },
});
