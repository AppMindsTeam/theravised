import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';
import {CheckIcon, DotedIcon, UnCheckIcon} from '../../assets/svg';

interface Props {
  name: string;
  followUp: string;
}
const ClientItem: React.FC<Props> = ({name, followUp}) => {
  const [isTickVisible, setIsTickVisible] = useState(false);
  const handleIconToggle = () => {
    setIsTickVisible(!isTickVisible);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity hitSlop={6} onPress={handleIconToggle}>
        {isTickVisible ? <CheckIcon /> : <UnCheckIcon />}
      </TouchableOpacity>
      <Text style={[appStyles.h5, styles.titleStyle]}>{name}</Text>
      <DotedIcon />
      <Text style={[appStyles.h5, styles.subTitle]}>{followUp}</Text>
    </View>
  );
};

export default ClientItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 15,
    flexDirection: 'row',
    paddingRight: 15,
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.black,
    marginLeft: 30,
    width: '42%',
  },
  subTitle: {
    color: colors.black,
    marginLeft: 30,
  },
});
