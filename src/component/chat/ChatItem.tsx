import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

interface Props {
  title: string;
  ImageUrl: string;
  isActive?: boolean;
}
const ChatItem: React.FC<Props> = ({title, ImageUrl, isActive}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: ImageUrl,
          }}
          style={styles.imgStyle}
        />
        {isActive ? (
          <View style={styles.innerImageContainer} />
        ) : (
          <View style={styles.timeContainer}>
            <Text style={styles.text}>11m</Text>
          </View>
        )}
      </View>

      <View style={styles.innerContainer}>
        <Text style={appStyles.h4}>{title}</Text>
        <Text style={[appStyles.h7, {color: colors.gray[50]}]}>You: ok...</Text>
      </View>
      {!isActive ? (
        <Text style={[appStyles.h7, {color: colors.gray[50]}]}>12:07 PM</Text>
      ) : (
        <View style={styles.ActiveContainer} />
      )}
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
  imageContainer: {
    width: 56,
    height: 56,
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
  innerImageContainer: {
    position: 'absolute',
    right: -6,
    bottom: 8,
    zIndex: 10,
    backgroundColor: '#5AD439',
    width: 16,
    height: 16,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 2,
  },
  timeContainer: {
    position: 'absolute',
    right: 0,
    bottom: 4,
    zIndex: 10,
    backgroundColor: '#E5F8DF',
    width: 26,
    height: 16,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
  },
  text: {
    fontSize: 9,
    textAlign: 'center',
    fontFamily: fonts.MontserratBold,
    color: colors.black,
  },
  ActiveContainer: {
    width: 14,
    height: 14,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
});
