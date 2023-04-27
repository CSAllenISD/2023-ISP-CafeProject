import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, Alert } from 'react-native';
import Logo from '../../assets/images/projectLogo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SQLite from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import {useEffect} from 'react';
export default function SignInScreen({ navigation }) {
  const db = SQLite.openDatabase('MenuItems.db')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, newSetUsername] = useState('');
  const [newPassword, newSetPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [login, setLogin] = useState([]);
  const {height} = useWindowDimensions();

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS login (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)')
  
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM login', null,
        (txObj, resultSet) => setLogin(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

      setIsLoading(false)
    },[]);

    if (isLoading) {
      return (
          <View style={styles.container}>
              <Text>Loading ...</Text>
              </View>
      );
    }

  const onSignInPressed =() => {
    if (username.trim().length !== 0 && (password.trim().length !==0)) {
        navigation.navigate("Menu")
      } else {
        Alert.alert('Invalid username or password', '', [

            {text: 'OK'},
          ]);
      }

  }

  return (
      <View style={styles.root}>
          <Image
           source={Logo} 
           style={[styles.logo, {height: height * 0.3}]} 
           resizeMode="contain" 
           />
           <CustomInput 
           placeHolder="Username" 
           value={username} 
           setValue={setUsername} 
           />
           <CustomInput 
           placeHolder="Password" 
           value={password} 
           setValue={setPassword} 
           secureTextEntry={true}
           />
           <CustomInput 
           placeHolder="New Username" 
           value={newUsername} 
           setValue={newSetUsername} 
           />
           <CustomInput 
           placeHolder="New Password" 
           value={newPassword} 
           setValue={newSetPassword} 
           secureTextEntry={true}
           />

    <CustomButton text="Sign In" onPress={onSignInPressed} />
    <CustomButton text="Sign Up" onPress={onSignInPressed} />
      </View>
  )
}
const styles = StyleSheet.create({
  root: {
      alignItems: 'center',
      padding: 80,
  },
  logo: {
      width: '60%',
      maxWidth: 500,
      maxHeight: 200,
  },
});