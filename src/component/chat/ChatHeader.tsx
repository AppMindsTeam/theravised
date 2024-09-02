import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';
import {BackArrow} from '../../assets/svg';

interface Props {
  //   title: string;
  onPress: () => void;
}
const ChatHeader: React.FC<Props> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} hitSlop={4}>
        <BackArrow />
      </TouchableOpacity>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
        }}
        style={styles.imgStyle}
      />
      <Text style={[appStyles.h4, {marginLeft: 10}]}>Lachie Fraser</Text>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  imgStyle: {
    width: 34,
    height: 34,
    marginLeft: 10,
    borderRadius: 100,
  },
  text: {
    fontSize: 22,
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    marginLeft: 10,
  },
});
