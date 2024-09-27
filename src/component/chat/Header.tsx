import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

interface Props {
  //   title: string;
}
const Header: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
        }}
        style={styles.imgStyle}
      />
      <Text style={styles.text}>Chat</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  text: {
    fontSize: 22,
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    marginLeft: 90,
  },
});
