import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

interface Props {
  ImageUrl: string;
  title: string;
  description: string;
}
const ProgramItem: React.FC<Props> = ({ImageUrl, title, description}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <ImageBackground source={{uri: ImageUrl}} style={styles.imgStyle}>
        <View style={styles.timeBackground}>
          <Text style={[appStyles.h10, styles.timeStyle]}>2m 30s</Text>
        </View>
      </ImageBackground>

      <Text
        style={[
          appStyles.h6,
          {color: colors.black, marginTop: 9, paddingHorizontal: 8},
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
    overflow: 'hidden',
    marginRight: 8,
    justifyContent: 'flex-end',
  },
  description: {
    fontSize: 10,
    fontFamily: fonts.MontserratMedium,
    paddingHorizontal: 8,
    color: colors.gray[50],
  },
  timeBackground: {
    backgroundColor: colors.gray[550],
    borderRadius: 100,
    borderColor: colors.gray[550],
    borderWidth: 1,
    paddingHorizontal: 4,
    alignSelf: 'flex-end',
    margin: 3,
  },
  timeStyle: {
    color: colors.white,
    fontSize: 8,
    fontFamily: fonts.MontserratMedium,
  },
});
