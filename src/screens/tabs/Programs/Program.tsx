import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Program = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My-Program Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    fontWeight: '700',
  },
});

export default Program;
