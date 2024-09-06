import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors, fonts} from '../screens/utilities/theme';
import {SuccessIcon} from '../assets/svg';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<Props> = ({isVisible, onClose}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={onClose}
      backdropOpacity={0.6}
      style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <SuccessIcon style={styles.icon} />
        <Text style={styles.message}>Successfully upload</Text>
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
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  icon: {
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    textAlign: 'center',
  },
});

export default SuccessModal;
