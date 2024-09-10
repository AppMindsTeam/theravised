import {StatusBar, StyleSheet, View, FlatList, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/ClientBottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors} from '../../utilities/theme';
import {CalenderCard, ClientProgram} from '../../../component';
import {CLIENT_PROGRAM_ARRAY} from '../../../constants';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Programs'
>;

const Programs: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <Text style={appStyles.h4}>Today’s Progress</Text>
      <CalenderCard isCalender={false} containerStyle={{marginHorizontal: 1}} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={CLIENT_PROGRAM_ARRAY}
        keyExtractor={item => item.ImageUrl}
        renderItem={({item}) => (
          <ClientProgram
            ImageUrl={item.ImageUrl}
            index={item.index}
            isCombine={item.Combined}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Programs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
  },
  contentContainerStyle: {
    gap: 10,
    paddingBottom: 20,
    marginTop: 17,
  },
});
