import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  ImageUrl: string;
  title: string;
  onPress?: () => void;
}
const MyProgressItem: React.FC<Props> = ({ImageUrl, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: ImageUrl}} style={styles.imgStyle} />
      <Text
        style={[
          appStyles.h6,
          {color: colors.black, marginTop: 13, paddingHorizontal: 10},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyProgressItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 128,
    paddingBottom: 13,
    borderRadius: 10,
  },
  imgStyle: {
    height: 84,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
