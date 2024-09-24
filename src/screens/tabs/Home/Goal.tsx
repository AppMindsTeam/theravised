import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../../utilities/theme';
import {AngryIcon, HappyIcon, Tickicon, UnTick} from '../../../assets/svg';
import {AppButton, FormInput} from '../../../component';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const initialSets = [
  {id: 1, reps: 15, load: '18kg', completed: true},
  {id: 2, reps: 15, load: '18kg', completed: true},
];

const Goal: React.FC = () => {
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

  return (
    <View style={styles.container}>
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
          <Text style={styles.headerText}>Load</Text>
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
      <View style={{flexDirection: 'row'}}>
        <MultiSlider
          values={sliderValue}
          sliderLength={284}
          onValuesChange={sliderValueChange}
          min={0}
          max={10}
          step={1}
          markerStyle={styles.marker}
          selectedStyle={styles.selectedTrack}
          unselectedStyle={styles.unselectedTrack}
          trackStyle={styles.track}
          customLabel={props => <Text>{props.oneMarkerValue}</Text>}
          snapped
        />
        <HappyIcon style={{position: 'absolute', top: 14}} />
        <AngryIcon style={{position: 'absolute', top: 14, right: 5}} />
      </View>

      <Text style={styles.commentText}>Comments</Text>
      <FormInput
        placeholder="type here"
        inputStyles={{color: colors.black}}
        multiline
        inputContainerStyle={styles.inputContainer}
      />
      <AppButton
        title="Save"
        customStyle={styles.buttonContainer}
        titleStyle={{fontSize: 14}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
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
    width: 14,
    height: 14,
    marginTop: 10,
    marginLeft: 22,
  },
  scoreText: {
    fontSize: 14,
    fontFamily: fonts.MontserratSemiBold,
    color: colors.black,
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
    marginLeft: 16,
    paddingRight: 16,
    height: 10,
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
});

export default Goal;
