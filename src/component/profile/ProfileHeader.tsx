import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Editicon} from '../../assets/svg';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  onPress: () => void;
}
const ProfileHeader: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={4}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1612943680768-d82060323fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        }}
        style={styles.imgStyle}
      />

      <View style={styles.innerContainer}>
        <Text style={appStyles.h4}>Lachie Fraser</Text>
        <Text style={[appStyles.h5, {color: colors.gray[50]}]}>
          Lachie123@gmail.com
        </Text>
      </View>
      <Editicon />
    </TouchableOpacity>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  innerContainer: {flexDirection: 'column', flex: 1, marginLeft: 14},
  imgStyle: {
    width: 52,
    height: 52,
    borderRadius: 100,
    borderColor: colors.primary,
    borderWidth: 2,
  },
});
