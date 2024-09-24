import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors, fonts} from '../../utilities/theme';
import {BackArrow, PlayIcon, RigtArrow, WaitIcon} from '../../../assets/svg';
import {HistoryItem, InstructionItem} from '../../../component';

type Props = NativeStackScreenProps<HomeStackParamsList, 'VideoDetail'>;

const VideoDetail: React.FC<Props> = ({navigation}) => {
  const [statusColor, setStatusColor] = useState('Instructions');
  const data = [1, 2, 3, 4];
  const Historydata = [1, 2];

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      <ImageBackground
        style={styles.mainImage}
        source={{
          uri: 'https://media.istockphoto.com/id/2047970581/photo/modern-rehabilitation-physiotherapy-at-work-with-client-holding-dumbbell.jpg?s=612x612&w=0&k=20&c=If2qvnMZBRXFtgngzSOXEAYpo_AJJOA_5Ue6IAaWyBE=',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.ArrowButton}
          hitSlop={10}>
          <BackArrow />
        </TouchableOpacity>
        <TouchableOpacity>
          <PlayIcon style={{alignSelf: 'center', top: 20}} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{paddingHorizontal: 18, marginTop: 25}}>
        <Text style={appStyles.h1}>Title</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={appStyles.h2}>2 x 15</Text>
          <WaitIcon style={{marginLeft: 12, marginRight: 6}} />
          <Text style={appStyles.h2}>18kg</Text>
        </View>
        <View style={styles.equipmentContainer}>
          <Text
            style={[appStyles.h5, {color: colors.primary, paddingVertical: 2}]}>
            Equipment
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#DADADA',
          width: '100%',
          marginTop: 22,
        }}
      />
      {/* ------------------------------------------------------------------------------------------- */}
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={[
            styles.topTab,
            {
              borderBottomWidth: 3,
              borderBottomColor:
                statusColor === 'Instructions' ? colors.primary : '#D2D2D2',
            },
          ]}
          onPress={() => setStatusColor('Instructions')}>
          <Text
            style={[
              styles.textStyle,
              {
                color:
                  statusColor === 'Instructions' ? colors.primary : '#D2D2D2',
              },
            ]}>
            Instructions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.topTab,
            {
              borderBottomWidth: 3,
              borderBottomColor:
                statusColor === 'History' ? colors.primary : '#D2D2D2',
            },
          ]}
          onPress={() => setStatusColor('History')}>
          <Text
            style={[
              styles.textStyle,
              {color: statusColor === 'History' ? colors.primary : '#D2D2D2'},
            ]}>
            History
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {statusColor === 'Instructions' ? (
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}) => <InstructionItem />}
            />
            <TouchableOpacity>
              <RigtArrow
                width={30}
                height={30}
                style={{alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Historydata}
              renderItem={({item}) => <HistoryItem />}
            />
            <TouchableOpacity>
              <RigtArrow
                width={30}
                height={30}
                style={{marginTop: 30, alignSelf: 'flex-end', marginRight: 8}}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    flex: 1,
  },
  mainImage: {
    height: 250,
    width: '100%',
  },
  ArrowButton: {
    marginLeft: 18,
    marginTop: 45,
  },
  equipmentContainer: {
    backgroundColor: `${colors.primary}20`,
    width: 101,
    height: 27,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 15,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginTop: 17,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    paddingBottom: 8,
  },
  topTab: {
    justifyContent: 'space-between',
    width: '48%',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 20,
  },
});

export default VideoDetail;
