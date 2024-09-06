import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

const BottomLine = ({onPress, title}: {onPress: () => void; title: string}) => {
  return (
    <View style={styles.bottomContainer}>
      <Text style={[appStyles.h7, {color: colors.gray[50]}]}>
        I already have an account!
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            appStyles.h7,
            {color: colors.primary, fontFamily: fonts.MontserratSemiBold},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomLine;

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
});
