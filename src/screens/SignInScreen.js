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
import { LinearGradient } from 'expo-linear-gradient';

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
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], 
      (tx, results) => {
        if (results.rows.item(0).username == username && results.rows.item(0).password == password) {
        navigation.navigate("Menu")
        console.log(results.rows.item(0).username);
        }
        Alert.alert('Welcome ' + username, "", [

          {text: 'OK'},
        ])
     
          
         },  
         (tx, error) => {
      
        console.log(error);
          
      }
        
      );
      });
      
    } else {
      Alert.alert('Username or password field is empty', '', [

          {text: 'OK'},
        ]);
    }

}


  const onSignUpPressed =() => {
    db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO login (username, password) VALUES (?,?)',
      [newUsername, newPassword],
      (tx, results) => {
        console.log('Accounts', results.rowsAffected);
        if (results.rowsAffected > 0) {
          if (newUsername.trim().length !== 0 && (newPassword.trim().length !==0)) {
          Alert.alert('Successfully created an account'); }
          else Alert.alert('Failed to create an account');
        } else Alert.alert('Failed to create an account');
      }
    );
    });
    viewUser() ;
}

const viewUser = () => {
 
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM login',
      [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        console.log(temp);
      }
    );
  });

}

  

  return (
      <View style={styles.main}>
         <LinearGradient
        colors={['#4c669f', 'cornflowerblue', 'cyan']}
        start = {{x: 0.5, y:0.5}}
        end = {{x: 0.6, y:1}}
        style={styles.background}
      />
          <Image
           source={Logo} 
           style={[styles.logo, {height: height * 0.4}]} 
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
               <CustomButton text="Sign In" onPress={onSignInPressed} />

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

    <CustomButton text="Sign Up" onPress={onSignUpPressed} />
      </View>
  )
}
const styles = StyleSheet.create({
  main: {
      alignItems: 'center',
      padding: 80,
      justifyContent: 'space-between',

  },
  logo: {
      width: '80%',
      maxWidth: 500,
      maxHeight: 200,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  }
});