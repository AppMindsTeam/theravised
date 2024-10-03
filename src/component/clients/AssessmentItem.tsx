import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  title: string;
  onPress?: () => void;
  ImageUrl?: string;
}
const AssessmentItem: React.FC<Props> = ({title, ImageUrl, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: ImageUrl,
        }}
        style={styles.imgStyle}
      />
      <Text style={[appStyles.h4, {paddingLeft: 20, paddingVertical: 10}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AssessmentItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  imgStyle: {
    width: 160,
    height: 130,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 18,
  },
});
