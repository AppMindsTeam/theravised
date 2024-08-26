import React, {useState, useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  Animated,
  View,
  Dimensions,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigation';
import {images} from '../../assets/images';
import {colors, fonts} from '../utilities/theme';
import {SLIDES} from '../../constants';
import {AppButton} from '../../component';

type Props = NativeStackScreenProps<AuthStackParamList, 'Onboard'>;

const sizes = {
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
};

const Onboard: React.FC<Props> = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollX = new Animated.Value(0);

  const onBackButtonPress = () => {
    let newIndex = selectedIndex + 1;
    if (newIndex == 3) {
      navigation.replace('ChoseAccount');
    }
    setSelectedIndex(newIndex);
    const scrollPosition = newIndex * sizes.screenWidth;
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: scrollPosition,
        animated: true,
      });
    }
  };

  const getButtonTitle = () => {
    if (selectedIndex === 2) {
      return 'Get Started';
    }
    return 'Next';
  };

  return (
    <View style={{backgroundColor: colors.bgcolor, flex: 1}}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const selectedIndex = Math.floor(
            event.nativeEvent.contentOffset.x / Math.floor(sizes.screenWidth),
          );
          setSelectedIndex(selectedIndex);
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={16}>
        {SLIDES.map((item, index) => {
          const inputRange = [
            (index - 1) * sizes.screenWidth,
            index * sizes.screenWidth,
            (index + 1) * sizes.screenWidth,
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'extend',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'extend',
          });
          const rotateY = scrollX.interpolate({
            inputRange,
            outputRange: ['-30deg', '0deg', '30deg'],
            extrapolate: 'extend',
          });

          return (
            <View
              key={index}
              style={[styles.container, {width: sizes.screenWidth}]}>
              <Animated.View style={{transform: [{scale}, {rotateY}], opacity}}>
                <SafeAreaView />
                <Image source={images.applogo} style={styles.logoStyle} />

                <Image
                  resizeMode="contain"
                  source={item.image}
                  style={styles.imgStyle}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 12,
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.dotContainer}>
                    {SLIDES.map((item, index) => (
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        key={index}>
                        {selectedIndex == index ? (
                          <View style={styles.activeDot} />
                        ) : (
                          <View style={[styles.dot]} />
                        )}
                      </View>
                    ))}
                  </View>
                </View>
                <Text style={styles.titleStyle}>Lorem Ipsum</Text>
                <Text style={styles.subTitle}>
                  Lorem ipsum dolor sit amet, adipiscing elit. Sed rhoncus elit
                  malesuada ante
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 100,
                  }}>
                  {selectedIndex !== 2 && (
                    <AppButton
                      title="Skip"
                      onPress={() => navigation.navigate('ChoseAccount')}
                      customStyle={styles.containerStyle}
                      titleStyle={styles.buttonTitle}
                    />
                  )}
                  <AppButton
                    title={getButtonTitle()}
                    customStyle={
                      selectedIndex === 2
                        ? {...styles.containerStyle2, width: '100%'}
                        : styles.containerStyle2
                    }
                    onPress={onBackButtonPress}
                  />
                </View>
              </Animated.View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,

    paddingHorizontal: 18,
  },
  imageContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight / 2.1,
    borderBottomRightRadius: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 100,
    backgroundColor: colors.gray[50],
  },
  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },
  imgSyle: {
    width: 280,
    height: 280,
    alignSelf: 'center',
  },
  logoStyle: {
    width: 140,
    height: 25,
    alignSelf: 'center',
    marginTop: 45,
  },
  imgStyle: {
    width: 280,
    height: 280,
    alignSelf: 'center',
    marginTop: 55,
  },
  titleStyle: {
    fontSize: 24,
    color: colors.black,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 30,
    marginTop: 24,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: fonts.MontserratRegular,
    marginTop: 10,
    color: colors.black,
    lineHeight: 20,
  },
  containerStyle: {
    backgroundColor: colors.bgcolor,
    width: '45%',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  containerStyle2: {
    width: '45%',
  },
  buttonTitle: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: fonts.MontserratSemiBold,
  },
});
