import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import {SquaProgressItem} from '../../../component';
import {AddIcon2} from '../../../assets/svg';
import AddModal from '../../../Model/AddModel';
import {images} from '../../../assets/images';

type Props = NativeStackScreenProps<HomeStackParamsList, 'SquatTest'>;

const SquatTest: React.FC<Props> = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const data = [
    {id: '1', image: images.squatImg4},
    {id: '2', image: images.squatImg5},
    {id: '3', image: images.squatImg3},
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.addContainer, {height: 90, justifyContent: 'center'}]}
        onPress={() => setModalVisible(true)}>
        <AddIcon2 />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 14}}>
        <SquaProgressItem date="Aug 11, 2024" data={data} />
        <SquaProgressItem date="Aug 11, 2024" data={data} />
        <SquaProgressItem date="Aug 11, 2024" data={data} />
        <SquaProgressItem date="Aug 11, 2024" data={data} />
      </ScrollView>
      <AddModal isVisible={isModalVisible} onClose={handleModalClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
    flex: 1,
  },
  addContainer: {
    height: 60,
    backgroundColor: colors.white,
    marginTop: 8,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
});

export default SquatTest;
