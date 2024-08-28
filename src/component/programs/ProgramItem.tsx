import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

interface Props {
  ImageUrl: string;
  title: string;
  description: string;
  date: string;
  time: string;
}
const ProgramItem: React.FC<Props> = ({
  ImageUrl,
  title,
  description,
  date,
  time,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image source={{uri: ImageUrl}} style={styles.imgStyle} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 6,
          marginTop: 6,
        }}>
        <Text style={[appStyles.h8, {color: colors.gray[50]}]}>{date}</Text>
        <Text style={[appStyles.h8, {color: colors.primary}]}>{time}</Text>
      </View>

      <Text
        style={[
          appStyles.h6,
          {color: colors.black, marginTop: 4, paddingHorizontal: 8},
        ]}>
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default ProgramItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '48.5%',
    paddingBottom: 10,
    borderRadius: 10,
  },
  imgStyle: {
    height: 97,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  description: {
    fontSize: 10,
    fontFamily: fonts.MontserratMedium,
    paddingHorizontal: 8,
    color: colors.gray[50],
  },
});
