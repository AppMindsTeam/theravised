import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {colors, fonts} from '../screens/utilities/theme';
import {AddCameraIcon, AddExplorIcon, AddGaleryIcon} from '../assets/svg';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const AddModal: React.FC<Props> = ({isVisible, onClose}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={onClose}
      backdropOpacity={0.6}
      style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose}>
          <AddCameraIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <AddGaleryIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <AddExplorIcon />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  modalContainer: {
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 38,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
});

export default AddModal;
