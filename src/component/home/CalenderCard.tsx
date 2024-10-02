import {Dimensions, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';
import {Tickicon} from '../../assets/svg';

interface Props {
  isCalender: boolean;
  containerStyle?: ViewStyle;
  isTitle?: boolean;
}

const CalenderCard: React.FC<Props> = ({
  isCalender,
  containerStyle,
  isTitle,
}) => {
  const DAY_ARRAY = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

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
                  <Tickicon />
                  <View style={styles.dotContainer} />
                </>
              ) : (
                <Text style={styles.textContainer}>{text}</Text>
              )}
            </View>
          ))}
        </View>
      ) : null}
      {/* ----------------------------------------------------------------------------------- */}

      {isTitle ? (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <Text style={[appStyles.h4, {marginLeft: 15}]}>Daily Progress</Text>
        </View>
      ) : null}

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
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  textContainer: {
    color: colors.black,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.MontserratMedium,
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
    marginTop: 15,
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
