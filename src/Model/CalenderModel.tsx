import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../screens/utilities/theme';
import {Calendar} from 'react-native-calendars';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<Props> = ({isVisible, onClose}) => {
  const [selected, setSelected] = useState('');

  const handleDayPress = (day: any) => {
    setSelected(day.dateString);
    onClose(); // Close the modal when a date is selected
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
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
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
