import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5C93ED',
  black: '#000000',

  gray: {
    50: '#878589',
    100: '#E8E8E8',
    150: '#D9D9D9',
    200: '#A7A7A7',
    250: '#E0E0E0',
    300: '#E4E4E4',
    350: '#E2E2E2',
  },
  offWhite: '#F6F6F7',
  lightGray: '#7E7E7E',
  red: '#ff0000',
  red2: '#FF4242',
  pink: '#FFEFEF',
  white: '#FFFFFF',
  bgcolor: '#F8F3F2',
  baseTile: '#343434',
  blue: '#2567F9',
  darkblue: '#8225F9',
  orange: '#FFB017',
  green: '#03B10F',
};

export const fonts = {
  MontserratBold: 'Montserrat-Bold',
  MontserratSemiBold: 'Montserrat-SemiBold',
  MontserratMedium: 'Montserrat-Medium',
  MontserratRegular: 'Montserrat-Regular',
  MontserratLight: 'Montserrat-Light',
};

export const appStyles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
  h2: {
    fontSize: 18,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
  h3: {
    fontSize: 16,
    fontFamily: fonts.MontserratRegular,
    color: colors.black,
    lineHeight: 19,
  },
  h4: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
    lineHeight: 19,
  },
  h5: {
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
  },
  h6: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.primary,
  },
  h7: {
    fontSize: 12,
    fontFamily: fonts.MontserratMedium,
  },
  h9: {
    fontSize: 12,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.primary,
  },
  h8: {
    fontSize: 10,
    fontFamily: fonts.MontserratSemiBold,
  },
  h10: {
    fontSize: 10,
    fontFamily: fonts.MontserratMedium,
    color: colors.black,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
    marginTop: 5,
    fontFamily: fonts.MontserratLight,
  },
});
