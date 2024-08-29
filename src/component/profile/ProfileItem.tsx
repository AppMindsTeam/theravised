import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {colors, fonts} from '../../screens/utilities/theme';

interface Props {
  onPress?: () => void;
  title: string;
  Icon: ReactNode;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}
const ProfileItem: React.FC<Props> = ({
  title,
  Icon,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={[styles.container, containerStyle]}>
      {Icon}
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flexDirection: 'row',
    padding: 14,
    paddingLeft: 8,
    alignItems: 'center',
    marginTop: 14,
    borderBottomColor: colors.gray[150],
    borderBottomWidth: 1,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
    marginLeft: 12,
  },
});
