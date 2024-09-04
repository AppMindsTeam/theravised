import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import {CategoryItem, ProgramItem, SearchBar} from '../../../component';
import {AddIcon} from '../../../assets/svg';
import {PROGRAM_ARRAY} from '../../../constants/ProgramArray';

type Props = NativeStackScreenProps<HomeStackParamsList, 'CheckOut'>;

const CheckOut: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{width: 25, marginRight: 38}} hitSlop={4}>
          <AddIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Knee Injury', 'Shoulder Injury', 'Chest Injury'];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <View style={{paddingHorizontal: 14}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <CategoryItem
              title={item}
              selected={selectedCategory === item}
              onPress={() => setSelectedCategory(item)}
            />
          )}
        />
      </View>
      <View style={{paddingHorizontal: 18}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingTop: 10,
  },

  contentContainerStyle: {
    gap: 12,
    paddingBottom: 30,
    paddingVertical: 5,
    marginTop: 12,
  },
});

export default CheckOut;
