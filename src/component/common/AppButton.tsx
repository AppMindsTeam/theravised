import {
  StyleSheet,
  Text,
  TextStyle,
  ActivityIndicator,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../screens/utilities/theme';

const AppButton = ({
  title,
  customStyle,
  titleStyle,
  onPress,
  isLoading,
  disabled,
}: {
  title: string;
  customStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {backgroundColor: disabled ? colors.gray[50] : colors.primary},
        customStyle,
      ]}>
      {isLoading ? (
        <ActivityIndicator color={'white'} size={'small'} />
      ) : (
        <Text style={[styles.title, titleStyle]}> {title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 25,
  },
});
