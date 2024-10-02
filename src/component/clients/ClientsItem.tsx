import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';
import {CheckIcon, DotedIcon, UnCheckIcon} from '../../assets/svg';

interface Props {
  name: string;
  followUp: string;
  onPress?: () => void;
}
const ClientItem: React.FC<Props> = ({name, followUp, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <CheckIcon />
      <Text style={[appStyles.h5, styles.titleStyle]}>{name}</Text>
      <DotedIcon />
      <Text style={[appStyles.h5, styles.subTitle]}>{followUp}</Text>
    </TouchableOpacity>
  );
};

export default ClientItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 15,
    flexDirection: 'row',
    paddingRight: 15,
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.black,
    marginLeft: 30,
    width: '42%',
  },
  subTitle: {
    color: colors.black,
    marginLeft: 30,
    flex: 1,
  },
});
