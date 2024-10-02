import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {colors, fonts} from '../../utilities/theme';
import {AngryIcon, HappyIcon, Tickicon, UnTick} from '../../../assets/svg';
import {AppButton, FormInput} from '../../../component';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';

const initialSets = [
  {id: 1, reps: 15, load: '18kg', completed: true},
  {id: 2, reps: 15, load: '18kg', completed: true},
];

type Props = NativeStackScreenProps<HomeStackParamsList, 'Goal'>;

const Goal: React.FC<Props> = ({navigation}) => {
  const [sets, setSets] = useState(initialSets);
  const [sliderValue, setSliderValue] = useState([5]);

  const toggleCompletion = (id: number) => {
    setSets(prevSets =>
      prevSets.map(set =>
        set.id === id ? {...set, completed: !set.completed} : set,
      ),
    );
  };

  const sliderValueChange = (values: number[]) => {
    setSliderValue(values);
  };
  const validationSchema = Yup.object().shape({
    comment: Yup.string().required('Comment required'),
  });

  const formik = useFormik({
    initialValues: {
      comment: '',
    },

    validationSchema: validationSchema,
    onSubmit: values => {
      navigation.goBack();
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} />
      <View
        style={{
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 12,
          paddingBottom: 0,
        }}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerText, {color: colors.primary}]}>Sets</Text>
          <Text style={styles.headerText}>Reps</Text>
          <Text style={[styles.headerText, {marginRight: 14}]}>Load</Text>
          <Tickicon />
        </View>

        <ScrollView>
          {sets.map(set => (
            <View key={set.id} style={styles.row}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{set.id}</Text>
              </View>

              <Text style={styles.dataText}>{set.reps}</Text>
              <Text style={styles.dataText}>{set.load}</Text>

              <TouchableOpacity onPress={() => toggleCompletion(set.id)}>
                {set.completed ? <Tickicon /> : <UnTick />}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.commentText}>Pain Score</Text>
      <View style={styles.painScoreContainer}>
        <HappyIcon style={styles.leftIcon} />

        <MultiSlider
          values={sliderValue}
          sliderLength={280}
          onValuesChange={sliderValueChange}
          min={0}
          max={10}
          step={1}
          markerStyle={styles.marker}
          selectedStyle={styles.selectedTrack}
          unselectedStyle={styles.unselectedTrack}
          trackStyle={styles.track}
          snapped
        />

        <AngryIcon style={styles.rightIcon} />
      </View>
      <Text style={styles.painScoreText2}>0</Text>

      <Text style={styles.painScoreText}> {sliderValue[0]}</Text>

      <Text style={styles.commentText}>Comments</Text>
      <FormInput
        placeholder="type here"
        inputStyles={{color: colors.black}}
        multiline
        inputContainerStyle={styles.inputContainer}
        onChangeText={formik.handleChange('comment')}
        value={formik.values.comment}
        onBlur={formik.handleBlur('comment')}
        errorMessage={formik.touched.comment && formik.errors.comment}
      />

      <AppButton
        title="Save"
        customStyle={styles.buttonContainer}
        titleStyle={{fontSize: 14}}
        onPress={formik.handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  marker: {
    backgroundColor: colors.white,
    width: 18,
    height: 18,
    marginTop: 10,
    marginLeft: 30,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.primary,
  },
  dataText: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
  },
  selectedTrack: {
    backgroundColor: colors.primary,
    height: 10,
    marginLeft: 22,
  },
  unselectedTrack: {
    backgroundColor: colors.gray[150],
    height: 10,
  },
  track: {
    height: 10,
  },
  commentText: {
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: colors.white,
    height: 190,
    alignItems: 'flex-start',
  },
  buttonContainer: {
    width: 131,
    height: 35,
    alignSelf: 'flex-end',
    borderRadius: 14,
    marginTop: 25,
  },
  painScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIcon: {
    position: 'absolute',
    left: 0,
    top: 14,
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    top: 14,
  },
  scoreLabel: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
    marginHorizontal: 10,
  },
  painScoreText: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    textAlign: 'right',
    marginTop: -15,
    marginRight: 4,
  },
  painScoreText2: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: colors.black,
    textAlign: 'left',
    marginTop: -15,
    marginLeft: 5,
  },
});

export default Goal;
