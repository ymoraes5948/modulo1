import React, {Fragment} from 'react';
import {  StyleSheet,  View,  Text } from 'react-native';

const Todo = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text>Estudar o GoNtive</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    sectionContainer:{
      color: "#000"
    }
  },
);

export default Todo;