import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {colors, fonts} from '../screens/utilities/theme';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  modalType?: boolean;
}

const PopUpModel: React.FC<Props> = ({isVisible, onClose, modalType}) => {
  const [selectedItem, setSelectedItem] = useState(3);

  const data = [1, 2, 3, 4, 6, 7, 8, 9, 10];

  const renderItem = ({item}: {item: number}) => {
    const isSelected = item === selectedItem;
    return (
      <TouchableOpacity onPress={() => setSelectedItem(item)}>
        <View style={[styles.itemContainer, isSelected && styles.selectedItem]}>
          <Text style={[styles.itemText, isSelected && styles.selectedText]}>
            {item} {modalType ? 'sets' : 'reps'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onSwipeComplete={onClose}
      backdropOpacity={0.6}
      swipeDirection={'down'}
      onBackdropPress={onClose}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View style={styles.modalContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    paddingBottom: 26,
    paddingTop: 10,
    maxHeight: '50%',
  },
  listContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 130,
    marginVertical: 2,
  },
  itemText: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: `${colors.black}60`,
  },
  selectedItem: {
    backgroundColor: '#C7C7C7',
  },
  selectedText: {
    color: colors.black,
    fontFamily: fonts.MontserratBold,
  },
});

export default PopUpModel;
