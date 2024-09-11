import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {PhysioBottomTabParamlist} from '../../../navigation/PhysioBottomNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {Addimgicon, Filltericon, SentIcon, Sumicon2} from '../../../assets/svg';
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
            <Addimgicon width={32} height={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton} hitSlop={4}>
            <Sumicon2 width={32} height={32} />
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
      <View style={styles.sendContainer}>
        <Text style={[appStyles.h5, {color: colors.white}]}>
          Selected
          <Text style={[appStyles.h3, {color: colors.white}]}> 4 items</Text>
        </Text>
        <TouchableOpacity>
          <SentIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
    marginTop: 15,
    marginHorizontal: 18,
  },
  list: {
    marginTop: 10,
    gap: 15,
    paddingBottom: 25,
    marginHorizontal: 18,
  },
  headerIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 7,
  },
  headerIconButton: {
    width: 25,
    marginRight: 15,
  },
  sendContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingRight: 24,
    paddingVertical: 10,
  },
});

export default Library;
