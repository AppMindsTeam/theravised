import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  title: string;
  ImageUrl: string;
}
const ChatItem: React.FC<Props> = ({title, ImageUrl}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: ImageUrl,
        }}
        style={styles.imgStyle}
      />
      <View style={styles.innerContainer}>
        <Text style={appStyles.h4}>{title}</Text>
        <Text style={[appStyles.h7, {color: colors.gray[50]}]}>You: ok...</Text>
      </View>
      <Text style={[appStyles.h7, {color: colors.gray[50]}]}>12:07 PM</Text>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  imgStyle: {
    width: 56,
    height: 56,
    borderRadius: 100,
  },
  innerContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
});
