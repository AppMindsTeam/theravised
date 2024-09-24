import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';
import {images} from '../../assets/images';

interface Props {
  //   icon: ReactNode;
}
const SquatItem: React.FC<Props> = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity style={styles.container}>
        <Image source={images.squatImg1} style={styles.imgStyle} />
        <Text
          style={[
            appStyles.h6,
            {color: colors.black, textAlign: 'center', marginTop: 5},
          ]}>
          Feb 21,2024
        </Text>
        <Text
          style={[appStyles.h6, {color: colors.black, textAlign: 'center'}]}>
          First
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Image source={images.squatImg2} style={styles.imgStyle} />
        <Text
          style={[
            appStyles.h6,
            {color: colors.black, textAlign: 'center', marginTop: 5},
          ]}>
          Aug 11,2024
        </Text>
        <Text
          style={[appStyles.h6, {color: colors.black, textAlign: 'center'}]}>
          Latest
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SquatItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 185,
    borderRadius: 12,
    width: '48%',
    marginTop: 25,
  },
  imgStyle: {
    width: '100%',
    height: 141,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
