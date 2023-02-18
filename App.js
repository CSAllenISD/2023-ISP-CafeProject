//code given to you when you start Expo

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

//work in progress login feature
//still doing research to understand what some of these functions do

/*
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Touchable,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }

  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.header}>- LOGIN -</Text>
          
          <TextInput
              style={styles.textInput} placeholder='Username'
              onChangeText={ (username) => this.setState({username}) }
              underlineColorAndroid='transarent'
          />

          <TextInput
              style={styles.textInput} placeholder='Password'
              onChangeText={ (password) => this.setState({password}) }
              underlineColorAndroid='transarent'
          />
        
          <TouchableOpacity
              style={styles.btn}
              onPress={this.login}>
                <Text>Log in</Text>
          </TouchableOpacity>

        </View>
      
      </KeyboardAvoidingView>

    );
  }

  login = () => {
      alert('test'); 
  }
}

*/