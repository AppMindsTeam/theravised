import React from 'react';
import {Text, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {Warnicon} from '../assets/svg';
import {colors, fonts} from '../screens/utilities/theme';
import {AppButton} from '../component';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  isDeleteAccount?: boolean;
  onPress?: () => void;
}

const ConfirmationModal: React.FC<Props> = ({
  isVisible,
  onClose,
  isDeleteAccount,
  onPress,
}) => {
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
        <View style={styles.handle} />
        <Text style={styles.title}>
          {isDeleteAccount ? 'Delete Account' : 'Log out'}
        </Text>
        <Text style={styles.subTitle}>
          {isDeleteAccount
            ? 'Are you sure you want to delete your account?'
            : 'Are you sure you want to leave?'}
        </Text>
        <View style={styles.innerContainer}>
          {isDeleteAccount ? <Warnicon style={{marginTop: 5}} /> : null}
          <Text
            style={[
              styles.warnText,
              {color: isDeleteAccount ? colors.red2 : colors.black},
            ]}>
            {isDeleteAccount
              ? 'Deleting your account will remove all of your information from our database. This cannot be undone.'
              : 'We can’t notify you of new projects if you do.'}
          </Text>
        </View>
        <AppButton
          title={isDeleteAccount ? 'Delete' : 'Yes , Log out'}
          customStyle={
            [
              styles.customStyle,
              {
                backgroundColor: isDeleteAccount ? colors.red2 : colors.primary,
              },
            ] as ViewStyle
          }
          onPress={onPress}
        />

        <AppButton
          title="Cancel"
          customStyle={{backgroundColor: colors.white}}
          titleStyle={{color: colors.gray[200]}}
          onPress={onClose}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 16,
  },
  handle: {
    width: '25%',
    height: 6,
    borderRadius: 2,
    backgroundColor: colors.gray[250],
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 25,
    fontFamily: fonts.MontserratBold,
    color: colors.baseTile,
  },
  subTitle: {
    color: colors.baseTile,
    fontSize: 18,
    fontFamily: fonts.MontserratRegular,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingLeft: 25,
    marginTop: 8,
  },
  warnText: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
    color: colors.red2,
    paddingLeft: 10,
    paddingRight: 30,
  },
  customStyle: {
    width: '100%',
    marginTop: 15,
  },
});

export default ConfirmationModal;
