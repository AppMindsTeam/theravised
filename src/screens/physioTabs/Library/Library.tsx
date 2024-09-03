import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {PhysioBottomTabParamlist} from '../../../navigation/PhysioBottomNavigation';
import {colors} from '../../utilities/theme';
import {Addimgicon, Filltericon, Sumicon2} from '../../../assets/svg';
import {LibraryItem, SearchBar} from '../../../component';
import {LIBRARY_ARRAY} from '../../../constants';

type Props = NativeStackScreenProps<
  PhysioBottomTabParamlist & HomeStackParamsList,
  'Library'
>;

const Library: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerIconsContainer}>
          <TouchableOpacity style={styles.headerIconButton} hitSlop={4}>
            <Addimgicon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton} hitSlop={4}>
            <Sumicon2 />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          containerStyle={{width: '84%', height: 40}}
          placeholder="Exercise, Templates, etc..."
        />
        <TouchableOpacity>
          <Filltericon />
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={3}
        showsVerticalScrollIndicator={false}
        data={LIBRARY_ARRAY}
        renderItem={({item}) => <LibraryItem ImageUri={item.ImageUrl} />}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
    marginTop: 15,
  },
  list: {
    marginTop: 15,
    gap: 15,
  },
  headerIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconButton: {
    width: 25,
    marginRight: 15,
  },
});

export default Library;
