import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';
import {Clockicon, Tickicon, UnTick} from '../../assets/svg';

interface Props {
  ImageUrl: string;
}
const ClientProgram: React.FC<Props> = ({ImageUrl}) => {
  const [isTickVisible, setIsTickVisible] = useState(true);
  const handleIconToggle = () => {
    setIsTickVisible(!isTickVisible);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: ImageUrl,
        }}
        style={styles.imgStyle}>
        <View style={styles.timeBackground}>
          <Text style={[appStyles.h10, styles.timeStyle]}>2m 30s</Text>
        </View>
      </ImageBackground>
      <View style={styles.innerContainer}>
        <Text style={[appStyles.h8, {color: colors.black}]}>
          Lorem ipsum dolor sit adipiscing
        </Text>
        <Text style={[appStyles.h10, {marginTop: 5}]}>2x15</Text>
        <View style={styles.timeContainer}>
          <Clockicon />
          <Text style={[appStyles.h10, {marginLeft: 4}]}>7:30AM</Text>
        </View>
      </View>
      <TouchableOpacity
        hitSlop={8}
        style={{alignSelf: 'center'}}
        onPress={handleIconToggle}>
        {isTickVisible ? <Tickicon /> : <UnTick />}
      </TouchableOpacity>
    </View>
  );
};

export default ClientProgram;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
  },
  imgStyle: {
    width: 132,
  },
  innerContainer: {
    flexDirection: 'column',
    width: '45%',
    paddingVertical: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },
  timeBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 6,
    position: 'absolute',
    right: 5,
    bottom: 5,
    borderColor: 'white',
    borderWidth: 1,
  },
  timeStyle: {
    color: colors.white,
    alignSelf: 'center',
  },
});
