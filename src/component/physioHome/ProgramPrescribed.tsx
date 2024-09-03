import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Prescribedimg} from '../../assets/svg';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  //   onPress?: () => void;
}
const ProgramPrescribed: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '64%', paddingLeft: 14}}>
        <Text style={[appStyles.h6, {color: colors.black, letterSpacing: 1}]}>
          Member since jul 2025
        </Text>
        <View style={styles.innerContainer}>
          <View style={{flexDirection: 'column'}}>
            <Text style={appStyles.h10}>This week</Text>
            <View style={styles.contContainer}>
              <Text style={[appStyles.h9, styles.textStyle]}>123</Text>
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={appStyles.h10}>Avg per week</Text>
            <View style={styles.contContainer}>
              <Text style={[appStyles.h9, styles.textStyle]}>11</Text>
            </View>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={[appStyles.h8, {color: colors.black}]}>Total</Text>
            <View style={styles.contContainer}>
              <Text style={[appStyles.h9, styles.textStyle]}>298</Text>
            </View>
          </View>
        </View>
      </View>
      <Prescribedimg />
    </View>
  );
};

export default ProgramPrescribed;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 17,
    paddingTop: 16,
    paddingBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 18,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textStyle: {
    color: colors.white,
    paddingHorizontal: 17,
    paddingVertical: 5,
  },
  contContainer: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 12,
  },
});
