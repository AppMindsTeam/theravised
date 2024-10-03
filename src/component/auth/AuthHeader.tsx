import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {BackArrow} from '../../assets/svg';
import {images} from '../../assets/images';

const AuthHeader = ({onPress}: {onPress?: () => void}) => {
  return (
    <View style={styles.bottomContainer}>
      <TouchableOpacity onPress={onPress}>
        <BackArrow />
      </TouchableOpacity>

      <Image source={images.applogo} style={styles.logoStyle} />
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  logoStyle: {
    width: 200,
    height: 46,
    marginLeft: 44,
  },
});
