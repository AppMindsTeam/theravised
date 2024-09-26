import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appStyles, colors, fonts} from '../../screens/utilities/theme';
import {
  LinkIcon,
  MenuIcon,
  WaitIcon,
  UnLinkIcon,
  CrossIcon,
} from '../../assets/svg';

interface Props {
  ImageUrl: string;
  index: string;
  isCombine?: boolean | string;
  onPress?: () => void;
}

const ClientDetailItem: React.FC<Props> = ({
  ImageUrl,
  index,
  isCombine,
  onPress,
}) => {
  const ClientItem = ({itemIndex}: {itemIndex: number}) => {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onPress}>
          <ImageBackground source={{uri: ImageUrl}} style={styles.imgStyle}>
            <View style={styles.timeBackground}>
              <Text style={[appStyles.h10, styles.timeStyle]}>2m 30s</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <Text style={styles.titleStyle}>Title</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[appStyles.h5, {color: colors.black}]}>2 x 15</Text>
            <WaitIcon style={{marginLeft: 6}} />
            <Text style={[appStyles.h5, {color: colors.black, marginLeft: 3}]}>
              18kg
            </Text>
          </View>
        </View>

        {!isCombine ? (
          <LinkIcon style={{marginRight: 12}} />
        ) : (
          <UnLinkIcon style={{marginRight: 12}} />
        )}

        <TouchableOpacity>
          <MenuIcon style={{marginRight: 12}} />
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', top: -0, right: 1}}>
          <CrossIcon />
        </TouchableOpacity>
      </View>
    );
  };

  if (isCombine) {
    return (
      <View style={styles.wrapper}>
        <View style={{alignItems: 'center', width: 55}}>
          <View style={styles.indexContainer}>
            <Text style={[styles.indexText, {fontSize: 10}]}>2A</Text>
          </View>
          <View
            style={{
              height: 60,
              width: 1,
              backgroundColor: colors.primary,
              alignSelf: 'center',
            }}
          />
          <View style={styles.indexContainer}>
            <Text style={[styles.indexText, {fontSize: 10}]}>2B</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
          }}>
          <ClientItem itemIndex={0} />
          <ClientItem itemIndex={1} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{width: 55, alignItems: 'center'}}>
        <View style={styles.indexContainer}>
          <Text style={styles.indexText}>{index}</Text>
        </View>
      </View>
      <ClientItem itemIndex={0} />
    </View>
  );
};

export default ClientDetailItem;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexContainer: {
    width: 22,
    height: 22,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexText: {
    color: colors.primary,
    fontSize: 12,
    fontFamily: fonts.MontserratSemiBold,
  },
  imgStyle: {
    width: 95,
    height: 70,
    overflow: 'hidden',
    marginRight: 10,
    justifyContent: 'flex-end',
    marginVertical: 4,
    borderRadius: 10,
  },
  innerContainer: {
    flex: 1,
    paddingLeft: 3,
  },
  timeBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 100,
    borderColor: colors.gray[150],
    borderWidth: 1,
    paddingHorizontal: 2,
    alignSelf: 'flex-end',
    margin: 3,
  },
  timeStyle: {
    color: colors.white,
  },
  iconButton: {
    marginRight: 16,
  },
  titleStyle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
  },
});
