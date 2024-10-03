import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';
import {Tickicon, WaitIcon} from '../../assets/svg';

interface Props {}
const HistoryItem: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column'}}>
        <Text style={appStyles.h4}>Tuesday sept 3 2024</Text>

        <View style={{flexDirection: 'row', marginTop: 8}}>
          <Text style={styles.textStyle}>3 Sets . 10 Reps .</Text>
          <Text style={[styles.textStyle, {marginLeft: 12}]}>18-50kg</Text>
        </View>
      </View>
      <Tickicon width={24} height={24} />
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 19,
    paddingRight: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 12,
    backgroundColor: colors.gray[500],
  },
  textStyle: {
    fontSize: 16,
    fontFamily: fonts.MontserratBold,
    color: colors.black,
  },
});
