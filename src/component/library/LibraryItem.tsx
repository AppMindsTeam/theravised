import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Prescribedimg, Sumicon, Tickicon} from '../../assets/svg';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';

interface Props {
  //   onPress?: () => void;
  ImageUri: string;
}

const LibraryItem: React.FC<Props> = ({ImageUri}) => {
  const [isTickVisible, setIsTickVisible] = useState(false);
  const handleIconToggle = () => {
    setIsTickVisible(!isTickVisible);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: ImageUri,
        }}
        style={styles.imgStyle}
      />
      <TouchableOpacity style={styles.addicon} onPress={handleIconToggle}>
        {isTickVisible ? <Tickicon /> : <Sumicon />}
      </TouchableOpacity>
      <Text
        style={[
          appStyles.h9,
          {color: colors.black, paddingHorizontal: 10, marginTop: 5},
        ]}>
        Title Name
      </Text>
    </View>
  );
};

export default LibraryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '31%',
    borderRadius: 10,
    paddingBottom: 10,
  },
  imgStyle: {
    width: '100%',
    height: 84,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  addicon: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
});
