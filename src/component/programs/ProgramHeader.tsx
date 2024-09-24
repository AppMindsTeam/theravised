import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../screens/utilities/theme';
import {Calender2Icon, LeftArrow, RigtArrow, Tickicon} from '../../assets/svg';

interface Props {}
const ProgramHeader: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LeftArrow />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Today</Text>
      <Calender2Icon />
      <TouchableOpacity>
        <RigtArrow style={{marginLeft: 16}} />
      </TouchableOpacity>
    </View>
  );
};

export default ProgramHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
    marginLeft: 16,
    marginRight: 6,
  },
});
