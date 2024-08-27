import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  ImageUrl: string;
  title: string;
  date: string;
}
const MyProgressItem: React.FC<Props> = ({ImageUrl, title, date}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: ImageUrl}} style={styles.imgStyle} />
      <Text
        style={[
          appStyles.h6,
          {color: colors.black, marginTop: 10, paddingHorizontal: 10},
        ]}>
        {title}
      </Text>
      <Text
        style={[
          appStyles.h7,
          {color: colors.gray[50], paddingHorizontal: 10, marginTop: 4},
        ]}>
        {date}
      </Text>
    </TouchableOpacity>
  );
};

export default MyProgressItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 128,
    paddingBottom: 10,
    borderRadius: 10,
  },
  imgStyle: {
    height: 84,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
