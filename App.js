import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';

export default function App() {
  return (
    // <SafeAreaView style={{ backgroundColor: '' }}>
    <View >
      <Navbar title="To-Do App" />
      <View style={styles.container}>
        <AddTodo />
      </View>

    </View>
    // </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
});

