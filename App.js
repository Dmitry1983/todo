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

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: 'grey' }}>
      <View style={styles.container}>
        <Navbar title="toDo App" />
      </View>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {


  },
});

