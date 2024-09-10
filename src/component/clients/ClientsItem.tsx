import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';
import {CheckIcon, DotedIcon, UnCheckIcon} from '../../assets/svg';

interface Props {
  name: string;
  followUp: string;
}
const ClientItem: React.FC<Props> = ({name, followUp}) => {
  return (
    <View style={styles.container}>
      <CheckIcon />
      <Text style={[appStyles.h5, styles.titleStyle]}>{name}</Text>
      <DotedIcon />
      <Text style={[appStyles.h5, styles.subTitle]}>{followUp}</Text>
    </View>
  );
};

export default ClientItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
