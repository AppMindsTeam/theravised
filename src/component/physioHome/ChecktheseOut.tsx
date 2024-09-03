import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Prescribedimg} from '../../assets/svg';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

interface Props {
  //   onPress?: () => void;
  Imageurl: string;
}
const ChecktheseOut: React.FC<Props> = ({Imageurl}) => {
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

export default ChecktheseOut;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 182,
    borderRadius: 10,
    // paddingBottom: 5,
    // marginBottom: 5,
  },
  imgStyle: {
    height: 97,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  titleStyle: {paddingHorizontal: 6, paddingBottom: 7, color: colors.black},
  dateStyle: {paddingHorizontal: 6, marginTop: 7, color: colors.gray[50]},
});
