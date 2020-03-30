import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Body from './Components/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <Body></Body>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
