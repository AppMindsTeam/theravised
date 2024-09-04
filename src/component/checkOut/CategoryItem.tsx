import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../screens/utilities/theme';

interface Props {
  title: string;
  selected: boolean;
  onPress: () => void;
}

const CategoryItem: React.FC<Props> = ({title, selected, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selectedContainer]}
      onPress={onPress}>
      <Text style={[styles.text, selected && styles.selectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[350],
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  selectedContainer: {
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.black,
    fontSize: 16,
  },
  selectedText: {
    color: colors.white,
  },
});
