import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';
import {CalenderIcon, CheckIcon} from '../../assets/svg';
import CalenderModal from '../../Model/CalenderModel';

interface Props {
  isCalender: boolean;
  containerStyle?: ViewStyle;
}

const CalenderCard: React.FC<Props> = ({isCalender, containerStyle}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const DAY_ARRAY = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const [completedDays, setCompletedDays] = useState([
    false,
    true,
    false,
    true,
    false,
    false,
    true,
  ]);

  return (
    <View style={[styles.container, containerStyle]}>
      {isCalender ? (
        <View
          style={[
            styles.specialtyContainer,
            {gap: Dimensions.get('screen').width / 48},
          ]}>
          {DAY_ARRAY.map((text, index) => (
            <View
              key={index}
              style={{
                backgroundColor: `${colors.primary}20`,
                borderRadius: 100,
                width: Dimensions.get('screen').width / 11.9,
                height: Dimensions.get('screen').width / 11.9,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
              {completedDays[index] ? (
                <>
                  <CheckIcon />
                  <View style={styles.dotContainer} />
                </>
              ) : (
                <Text style={styles.textContainer}>{text}</Text>
              )}
            </View>
          ))}
          <TouchableOpacity
            style={styles.calenderContainer}
            hitSlop={6}
            onPress={() => setModalVisible(true)}>
            <CalenderIcon />
          </TouchableOpacity>
        </View>
      ) : null}
      {/* ----------------------------------------------------------------------------------- */}
      <View style={styles.lineContainer}>
        <View
          style={[
            styles.lineStyle,
            {borderBottomLeftRadius: 10, borderTopLeftRadius: 10},
          ]}
        />
        <View style={styles.lineStyle} />
        <View style={styles.lineStyle} />
        <View style={styles.lineStyle} />
        <View
          style={[
            styles.lineStyle,
            {
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: `${colors.primary}20`,
            },
          ]}
        />
      </View>
      <Text
        style={[
          appStyles.h5,
          {paddingHorizontal: 16, marginTop: 10, color: colors.gray[50]},
        ]}>
        4 of 5 completed
      </Text>

      <CalenderModal isVisible={isModalVisible} onClose={handleModalClose} />
    </View>
  );
};

export default CalenderCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 15,
    paddingBottom: 15,
    marginHorizontal: 18,
  },
  specialtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    alignSelf: 'center',
  },
  textContainer: {
    color: colors.black,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.MontserratMedium,
  },
  calenderContainer: {
    backgroundColor: `${colors.primary}20`,
    padding: 8,
    borderRadius: 100,
  },
  dotContainer: {
    position: 'absolute',
    bottom: -10,
    width: 6,
    height: 6,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  lineContainer: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 2,
  },
  lineStyle: {
    height: 10,
    width: '19.3%',
    backgroundColor: colors.primary,
  },
});
