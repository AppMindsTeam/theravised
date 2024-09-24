import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  date: string;
  data: Array<{id: string; image: any}>;
}

const SquaProgressItem: React.FC<Props> = ({date, data}) => {
  const renderItem = ({item}: {item: {id: string; image: any}}) => (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[appStyles.h6, {color: colors.black, paddingLeft: 10}]}>
        {date}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default SquaProgressItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginTop: 15,
    paddingTop: 12,
    paddingBottom: 5,
  },
  flatListContent: {
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.28,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
