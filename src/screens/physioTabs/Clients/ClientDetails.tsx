import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {appStyles, colors, fonts} from '../../utilities/theme';
import {AddIcon, AddIcon2, BackArrow} from '../../../assets/svg';
import {ClientDetailItem} from '../../../component';
import {CLIENT_PROGRAM_ARRAY} from '../../../constants';
import SuccessModal from '../../../Model/SuccessModel';
import AddModal from '../../../Model/AddModel';

type Props = NativeStackScreenProps<HomeStackParamsList, 'ClientDetails'>;

const ClientDetails: React.FC<Props> = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };

  const [statusColor, setStatusColor] = useState('Program');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{width: 25}}
          onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginLeft: 88}}>
          <Text style={appStyles.h4}>Lachie Fraser</Text>
          <Text style={[appStyles.h8, {color: colors.primary}]}>
            Lachie123@gmail.com
          </Text>
        </View>
      </View>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />

      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.topTab,
                {
                  backgroundColor:
                    statusColor === 'Program' ? colors.primary : 'transparent',
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                },
              ]}
              onPress={() => setStatusColor('Program')}>
              <Text
                style={[
                  styles.textStyle,
                  {
                    color:
                      statusColor === 'Program' ? colors.white : colors.black,
                  },
                ]}>
                Program
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.topTab,
                {
                  backgroundColor:
                    statusColor === 'Assessments'
                      ? colors.primary
                      : 'transparent',
                },
              ]}
              onPress={() => setStatusColor('Assessments')}>
              <Text
                style={[
                  styles.textStyle,
                  {
                    color:
                      statusColor === 'Assessments'
                        ? colors.white
                        : colors.black,
                  },
                ]}>
                Assessments
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View style={styles.contentContainer}> */}
      {statusColor === 'Program' ? (
        <View style={{paddingBottom: 150}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={CLIENT_PROGRAM_ARRAY}
            keyExtractor={item => item.ImageUrl}
            renderItem={({item}) => (
              <ClientDetailItem
                ImageUrl={item.ImageUrl}
                index={item.index}
                isCombine={item.Combined}
                onPress={() => navigation.navigate('ClientVideo')}
              />
            )}
            contentContainerStyle={styles.contentContainerStyle}
            ListFooterComponent={() => (
              <TouchableOpacity
                style={styles.addContainer}
                onPress={() => setModalVisible(true)}>
                <AddIcon2 style={{marginTop: 14}} />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View>
          <Text>Welcome to Assesment Screen</Text>
        </View>
      )}
      {/* </View> */}

      <AddModal isVisible={isModalVisible} onClose={handleModalClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 18,
  },
  headerContainer: {flexDirection: 'row', alignItems: 'center', marginTop: 20},
  contentContainerStyle: {
    gap: 10,
  },
  addContainer: {
    height: 60,
    backgroundColor: colors.white,
    marginTop: 8,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },

  subContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 3,
    backgroundColor: colors.white,
    paddingVertical: 8,
    borderRadius: 12,
  },
  tabContainer: {
    borderWidth: 1,
    width: '49%',
    borderColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  topTab: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    fontFamily: fonts.MontserratSemiBold,
  },
});

export default ClientDetails;
