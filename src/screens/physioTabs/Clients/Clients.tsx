import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {PhysioBottomTabParamlist} from '../../../navigation/PhysioBottomNavigation';
import {SearchIcon2, Sumicon2} from '../../../assets/svg';
import {appStyles, colors} from '../../utilities/theme';
import {ClientItem} from '../../../component';
import {CLIENT_ARRAY} from '../../../constants';

type Props = NativeStackScreenProps<
  PhysioBottomTabParamlist & HomeStackParamsList,
  'Clients'
>;

const Clients: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerIconsContainer}>
          <TouchableOpacity style={styles.headerIconButton} hitSlop={4}>
            <SearchIcon2 width={32} height={32} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerIconButton}
            hitSlop={4}
            onPress={() => navigation.navigate('AddNewClient')}>
            <Sumicon2 width={32} height={32} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[appStyles.h6, {color: colors.black}]}>Status</Text>
        <Text style={[appStyles.h6, {color: colors.black}]}>Name</Text>
        <Text style={[appStyles.h6, {color: colors.black}]}>Follow Up</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={CLIENT_ARRAY}
        renderItem={({item}) => (
          <ClientItem name={item.name} followUp={item.followUp} />
        )}
        contentContainerStyle={styles.list}
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

  headerIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  headerIconButton: {
    paddingRight: 12,
  },
  list: {
    marginTop: 15,
    gap: 14,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30,
    marginTop: 30,
  },
});

export default Clients;
