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
import Swipeable from 'react-native-swipeable';

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
          <View style={{flexDirection: 'column'}}>
            <Text
              style={[
                appStyles.h9,
                {color: colors.black, fontFamily: fonts.MontserratSemiBold},
              ]}>
              3 Sets. 10 Reps
            </Text>
            <Text
              style={[
                appStyles.h9,
                {color: colors.black, fontFamily: fonts.MontserratSemiBold},
              ]}>
              18-50kg
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
    const leftButtons = [
      <TouchableOpacity style={styles.deleteContainer}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>,
    ];
    return (
      <Swipeable leftButtons={leftButtons}>
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
      </Swipeable>
    );
  }
  const leftButtons = [
    <TouchableOpacity style={styles.deleteContainer2}>
      <Text style={styles.deleteText2}>Delete</Text>
    </TouchableOpacity>,
  ];

  return (
    <Swipeable leftButtons={leftButtons}>
      <View style={styles.container}>
        <View style={{width: 55, alignItems: 'center'}}>
          <View style={styles.indexContainer}>
            <Text style={styles.indexText}>{index}</Text>
          </View>
        </View>
        <ClientItem itemIndex={0} />
      </View>
    </Swipeable>
  );
};

export default ClientDetailItem;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 2,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
    backgroundColor: colors.gray[550],
    borderRadius: 100,
    borderColor: colors.gray[550],
    borderWidth: 1,
    paddingHorizontal: 4,
    alignSelf: 'flex-end',
    margin: 3,
  },
  timeStyle: {
    color: colors.white,
    fontSize: 8,
    fontFamily: fonts.MontserratMedium,
  },
  iconButton: {
    marginRight: 16,
  },
  titleStyle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
  },
  deleteContainer: {
    backgroundColor: 'red',
    width: 80,
    height: 163,
    marginLeft: 264,
  },
  deleteText: {
    fontSize: 12,
    fontFamily: fonts.MontserratSemiBold,
    paddingVertical: 70,
    paddingLeft: 10,
    color: colors.white,
  },
  deleteContainer2: {
    backgroundColor: 'red',
    width: 80,
    height: 81,
    marginLeft: 264,
  },
  deleteText2: {
    fontSize: 12,
    fontFamily: fonts.MontserratSemiBold,
    paddingVertical: 32,
    paddingLeft: 10,
    color: colors.white,
  },
});
// import React, {useState} from 'react';
// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {appStyles, colors, fonts} from '../../screens/utilities/theme';
// import {
//   LinkIcon,
//   MenuIcon,
//   WaitIcon,
//   UnLinkIcon,
//   CrossIcon,
// } from '../../assets/svg';
// import Swipeable from 'react-native-swipeable';

// interface Props {
//   ImageUrl: string;
//   index: string;
//   isCombine?: boolean | string;
//   onPress?: () => void;
// }

// const ClientDetailItem: React.FC<Props> = ({
//   ImageUrl,
//   index,
//   isCombine,
//   onPress,
// }) => {
//   const [isSwiped, setIsSwiped] = useState(false);

//   const ClientItem = ({itemIndex}: {itemIndex: number}) => {
//     return (
//       <View style={styles.mainContainer}>
//         <TouchableOpacity onPress={onPress}>
//           <ImageBackground source={{uri: ImageUrl}} style={styles.imgStyle}>
//             <View style={styles.timeBackground}>
//               <Text style={[appStyles.h10, styles.timeStyle]}>2m 30s</Text>
//             </View>
//           </ImageBackground>
//         </TouchableOpacity>
//         <View style={styles.innerContainer}>
//           <Text style={styles.titleStyle}>Title</Text>
//           <View style={{flexDirection: 'column'}}>
//             <Text
//               style={[
//                 appStyles.h9,
//                 {color: colors.black, fontFamily: fonts.MontserratSemiBold},
//               ]}>
//               3 Sets. 10 Reps
//             </Text>
//             <Text
//               style={[
//                 appStyles.h9,
//                 {color: colors.black, fontFamily: fonts.MontserratSemiBold},
//               ]}>
//               18-50kg
//             </Text>
//           </View>
//         </View>

//         {!isCombine ? (
//           <LinkIcon style={{marginRight: 12}} />
//         ) : (
//           <UnLinkIcon style={{marginRight: 12}} />
//         )}

//         <TouchableOpacity>
//           <MenuIcon style={{marginRight: 12}} />
//         </TouchableOpacity>
//         <TouchableOpacity style={{position: 'absolute', top: -0, right: 1}}>
//           <CrossIcon />
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   if (isCombine) {
//     const leftButtons = [
//       <TouchableOpacity style={styles.deleteContainer}>
//         <Text style={styles.deleteText}>Delete</Text>
//       </TouchableOpacity>,
//     ];
//     return (
//       <Swipeable
//         leftButtons={leftButtons}
//         onSwipeStart={() => setIsSwiped(true)}
//         onSwipeRelease={() => setIsSwiped(false)}>
//         <View style={styles.wrapper}>
//           <View style={{alignItems: 'center', width: 55}}>
//             <View style={styles.indexContainer}>
//               <Text style={[styles.indexText, {fontSize: 10}]}>2A</Text>
//             </View>
//             <View
//               style={{
//                 height: 60,
//                 width: 1,
//                 backgroundColor: colors.primary,
//                 alignSelf: 'center',
//               }}
//             />
//             <View style={styles.indexContainer}>
//               <Text style={[styles.indexText, {fontSize: 10}]}>2B</Text>
//             </View>
//           </View>
//           <View
//             style={{
//               flexDirection: 'column',
//               alignItems: 'center',
//               flex: 1,
//             }}>
//             <ClientItem itemIndex={0} />
//             <ClientItem itemIndex={1} />
//           </View>
//         </View>
//       </Swipeable>
//     );
//   }
//   const leftButtons = [
//     <TouchableOpacity style={styles.deleteContainer2}>
//       <Text style={styles.deleteText2}>Delete</Text>
//     </TouchableOpacity>,
//   ];

//   return (
//     <Swipeable
//       leftButtons={leftButtons}
//       onSwipeStart={() => setIsSwiped(true)}
//       onSwipeRelease={() => setIsSwiped(false)}>
//       <View
//         style={[
//           styles.container,
//           {
//             borderTopLeftRadius: isSwiped ? 10 : 0,
//             borderBottomLeftRadius: isSwiped ? 10 : 0,
//           },
//         ]}>
//         <View style={{width: 55, alignItems: 'center'}}>
//           <View style={styles.indexContainer}>
//             <Text style={styles.indexText}>{index}</Text>
//           </View>
//         </View>
//         <ClientItem itemIndex={0} />
//       </View>
//     </Swipeable>
//   );
// };

// export default ClientDetailItem;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//     paddingVertical: 2,
//   },
//   container: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     overflow: 'hidden',
//     alignItems: 'center',
//   },
//   wrapper: {
//     backgroundColor: colors.white,
//     borderRadius: 10,
//     borderTopLeftRadius: 0,
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   indexContainer: {
//     width: 22,
//     height: 22,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: colors.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   indexText: {
//     color: colors.primary,
//     fontSize: 12,
//     fontFamily: fonts.MontserratSemiBold,
//   },
//   imgStyle: {
//     width: 95,
//     height: 70,
//     overflow: 'hidden',
//     marginRight: 10,
//     justifyContent: 'flex-end',
//     marginVertical: 4,
//     borderRadius: 10,
//   },
//   innerContainer: {
//     flex: 1,
//     paddingLeft: 3,
//   },
//   timeBackground: {
//     backgroundColor: colors.gray[550],
//     borderRadius: 100,
//     borderColor: colors.gray[550],
//     borderWidth: 1,
//     paddingHorizontal: 4,
//     alignSelf: 'flex-end',
//     margin: 3,
//   },
//   timeStyle: {
//     color: colors.white,
//     fontSize: 8,
//     fontFamily: fonts.MontserratMedium,
//   },
//   iconButton: {
//     marginRight: 16,
//   },
//   titleStyle: {
//     color: colors.black,
//     fontSize: 16,
//     fontFamily: fonts.MontserratSemiBold,
//   },
//   deleteContainer: {
//     backgroundColor: 'red',
//     width: 80,
//     height: 156,
//     marginLeft: 264,
//     borderTopLeftRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
//   deleteText: {
//     fontSize: 12,
//     fontFamily: fonts.MontserratSemiBold,
//     paddingVertical: 70,
//     paddingLeft: 10,
//     color: colors.white,
//   },
//   deleteContainer2: {
//     backgroundColor: 'red',
//     width: 80,
//     height: 78,
//     marginLeft: 264,
//     borderTopLeftRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
//   deleteText2: {
//     fontSize: 12,
//     fontFamily: fonts.MontserratSemiBold,
//     paddingVertical: 32,
//     paddingLeft: 10,
//     color: colors.white,
//   },
// });
