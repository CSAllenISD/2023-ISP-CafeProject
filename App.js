import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
//import { styles } from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'gray' //'#F9FBFC'
  },
});

export default App;