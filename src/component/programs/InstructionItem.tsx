import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

interface Props {}
const InstructionItem: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dotStyle} />
      <Text style={[appStyles.h7, styles.textStyle]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus
        elit
      </Text>
    </View>
  );
};

export default InstructionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,

    backgroundColor: colors.white,
  },
  dotStyle: {
    width: 6,
    height: 6,
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginRight: 8,
  },
  textStyle: {color: colors.black, fontFamily: fonts.MontserratSemiBold},
});
