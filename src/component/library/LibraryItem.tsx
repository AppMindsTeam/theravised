// import React, {useState} from 'react';
// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {Checkbox2, UnCheckbox2} from '../../assets/svg';
// import {appStyles, colors} from '../../screens/utilities/theme';

// interface Props {
//   ImageUri: string;
// }

// const LibraryItem: React.FC<Props> = ({ImageUri}) => {
//   const [isTickVisible, setIsTickVisible] = useState(false);
//   const handleIconToggle = () => {
//     setIsTickVisible(!isTickVisible);
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={{
//           uri: ImageUri,
//         }}
//         style={styles.imgStyle}>
//         <TouchableOpacity style={styles.addicon} onPress={handleIconToggle}>
//           {isTickVisible ? <Checkbox2 /> : <UnCheckbox2 />}
//         </TouchableOpacity>
//       </ImageBackground>

//       <Text
//         style={[
//           appStyles.h9,
//           {color: colors.black, paddingHorizontal: 10, marginTop: 5},
//         ]}>
//         Title Name
//       </Text>
//     </View>
//   );
// };

// export default LibraryItem;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.white,
//     width: '31%',
//     borderRadius: 10,
//     paddingBottom: 10,
//   },
//   imgStyle: {
//     width: '100%',
//     height: 84,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     overflow: 'hidden',
//   },
//   addicon: {
//     alignSelf: 'flex-end',
//     marginRight: 5,
//     marginTop: 5,
//   },
// });

import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Checkbox2, UnCheckbox2} from '../../assets/svg';
import {appStyles, colors} from '../../screens/utilities/theme';

interface Props {
  ImageUri: string;
}

const LibraryItem: React.FC<Props> = ({ImageUri}) => {
  const [isTickVisible, setIsTickVisible] = useState(false);

  const handleIconToggle = () => {
    setIsTickVisible(!isTickVisible);
  };

  return (
    <View
      style={[
        styles.container,
        isTickVisible ? {borderColor: colors.primary} : null,
      ]}>
      <ImageBackground
        source={{
          uri: ImageUri,
        }}
        style={styles.imgStyle}>
        <TouchableOpacity
          style={styles.addicon}
          onPress={handleIconToggle}
          hitSlop={4}>
          {isTickVisible ? <Checkbox2 /> : <UnCheckbox2 />}
        </TouchableOpacity>
      </ImageBackground>

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
    borderWidth: 2,
    width: '31%',
    borderRadius: 10,
    paddingBottom: 10,
    borderColor: colors.bgcolor,
  },
  imgStyle: {
    width: '100%',
    height: 84,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  addicon: {
    alignSelf: 'flex-end',
    marginRight: 5,
    marginTop: 5,
  },
});
