import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

interface Props {
  title: string;
  count: string;
}
const ClientComponent: React.FC<Props> = ({title, count}) => {
  return (
    <View style={styles.container}>
      <Text style={[appStyles.h6, {color: `${colors.white}70`}]}>{title}</Text>
      <Text style={styles.contStyle}>{count}</Text>
    </View>
  );
};

export default ClientComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '48%',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  contStyle: {
    fontSize: 28,
    fontFamily: fonts.MontserratBold,
    color: colors.white,
    marginTop: 4,
  },
});
