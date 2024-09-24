import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import {SquaProgressItem, SquatItem} from '../../../component';
import {UploadIcon} from '../../../assets/svg';
import {images} from '../../../assets/images';

type Props = NativeStackScreenProps<HomeStackParamsList, 'SquatProgress'>;

const SquatProgress: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{width: 25, marginRight: 10}} hitSlop={6}>
          <UploadIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const data = [
    {id: '1', image: images.squatImg4},
    {id: '2', image: images.squatImg5},
    {id: '3', image: images.squatImg3},
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 14}}>
        <SquatItem />
        <SquaProgressItem date="Aug 11, 2024" data={data} />
        <SquaProgressItem date="Aug 11, 2024" data={data} />
        <SquaProgressItem date="Aug 11, 2024" data={data} />
      </ScrollView>
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

export default SquatProgress;
