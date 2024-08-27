import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {RightArrow} from '../../assets/svg';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  icon: ReactNode;
  isGoal: boolean;
}
const ChatItem: React.FC<Props> = ({icon, isGoal}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {icon}
      {!isGoal ? (
        <View style={styles.innerContainer}>
          <Text style={[appStyles.h5, {color: colors.gray[50]}]}>
            Your Physiotherapist
          </Text>
          <Text style={[appStyles.h6, {color: colors.black}]}>Amy Miles</Text>
        </View>
      ) : (
        <View style={styles.innerContainer}>
          <Text style={[appStyles.h6, {color: colors.black}]}>
            Walk 5 km in 4 weeks
          </Text>
        </View>
      )}

      <RightArrow />
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 18,
  },
  innerContainer: {flexDirection: 'column', flex: 1, marginLeft: 14},
});
