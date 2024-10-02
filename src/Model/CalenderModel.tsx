import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors, fonts} from '../screens/utilities/theme';
import {Calendar} from 'react-native-calendars';
import {AppButton} from '../component';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<Props> = ({isVisible, onClose}) => {
  const [markedDates, setMarkedDates] = useState<{[key: string]: any}>({});

  const handleDayPress = (day: any) => {
    const dateString = day.dateString;

    setMarkedDates(prevDates => {
      const newDates = {...prevDates};

      Object.keys(newDates).forEach(key => {
        if (newDates[key].selected) {
          newDates[key] = {
            ...newDates[key],
            selected: false,
            dotColor: colors.primary,
            marked: true,
          };
        }
      });

      newDates[dateString] = {
        selected: true,
        selectedColor: colors.primary,
      };

      return newDates;
    });
  };

  const handleContinuePress = () => {
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={onClose}
      backdropOpacity={0.2}
      style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <Calendar onDayPress={handleDayPress} markedDates={markedDates} />
        <AppButton
          title="Continue"
          onPress={handleContinuePress}
          customStyle={{borderRadius: 18, width: '45%', marginTop: 20}}
          titleStyle={{fontSize: 14, fontFamily: fonts.MontserratSemiBold}}
        />
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
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
  },
});

export default CalendarModal;
