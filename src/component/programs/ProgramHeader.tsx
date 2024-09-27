import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../screens/utilities/theme';
import {Calender2Icon, LeftArrow, RigtArrow, Tickicon} from '../../assets/svg';
import CalenderModal from '../../Model/CalenderModel';

interface Props {}
const ProgramHeader: React.FC<Props> = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LeftArrow />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Today</Text>
      <TouchableOpacity hitSlop={4} onPress={() => setModalVisible(true)}>
        <Calender2Icon />
      </TouchableOpacity>
      <TouchableOpacity>
        <RigtArrow style={{marginLeft: 16}} />
      </TouchableOpacity>
      <CalenderModal isVisible={isModalVisible} onClose={handleModalClose} />
    </View>
  );
};

export default ProgramHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
    marginLeft: 16,
    marginRight: 6,
  },
});
