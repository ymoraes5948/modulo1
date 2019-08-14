import React, { Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Todo from './components/Todo';

const App = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
