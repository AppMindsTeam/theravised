import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {PhysioBottomTabParamlist} from '../../../navigation/PhysioBottomNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {Addimgicon} from '../../../assets/svg';
import {
  CheckOutItem,
  ClientComponent,
  ProgramPrescribed,
} from '../../../component';
import {CHECKOUT_ARRAY} from '../../../constants';

type Props = NativeStackScreenProps<
  PhysioBottomTabParamlist & HomeStackParamsList,
  'PhysioHome'
>;

const PhysioHome: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{width: 25, marginRight: 18}}
          hitSlop={4}
          onPress={() => console.log('Icon Pressed')}>
          <Addimgicon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />

      <Text style={[appStyles.h4, {marginTop: 30, paddingHorizontal: 18}]}>
        Programs Prescribed
      </Text>
      <ProgramPrescribed />
      <Text style={[appStyles.h4, {marginTop: 25, paddingHorizontal: 18}]}>
        Clients
      </Text>
      <View style={styles.clientContainer}>
        <ClientComponent title="Active Clients" count="62" />
        <ClientComponent title="Total Clients" count="102" />
      </View>
      <View style={styles.viewText}>
        <Text style={appStyles.h4}>Check These Out</Text>
        <TouchableOpacity>
          <Text style={[appStyles.h8, {color: colors.primary}]}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CHECKOUT_ARRAY}
        renderItem={({item}) => <CheckOutItem Imageurl={item.ImageUrl} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 18,
  },
  clientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 33,
    paddingHorizontal: 18,
  },
  list: {
    marginTop: 15,
    paddingBottom: 30,
    gap: 10,
    paddingHorizontal: 18,
  },
});

export default PhysioHome;
