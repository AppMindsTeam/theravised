import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  Imageurl: string;
}

const CheckOutItem: React.FC<Props> = ({Imageurl}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: Imageurl,
        }}
        style={styles.imgStyle}
      />
      <Text style={[appStyles.h10, styles.dateStyle]}>04/07/2024</Text>
      <Text style={[appStyles.h7, styles.titleStyle]}>
        Lorem ipsum dolor sit amet consectetur
      </Text>
    </View>
  );
};

export default CheckOutItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 182,
    height: 155,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgStyle: {
    height: 97,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  titleStyle: {
    paddingHorizontal: 6,
    color: colors.black,
    marginBottom: 5,
  },
  dateStyle: {
    paddingHorizontal: 6,
    marginTop: 7,
    color: colors.gray[50],
  },
});
