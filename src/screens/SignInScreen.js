import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, Alert } from 'react-native';
import Logo from '../../assets/images/projectLogo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase(
  {
      name: 'CafeProject',
      location: 'default',
  },
  () => { },
  error => { console.log(error) }
);


export default function SignInScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  useEffect(() => {
    createTable();
    getData();
}, []);
const createTable = () => {
  db.transaction((tx) => {
      tx.executeSql(
          "CREATE TABLE IF NOT EXISTS "
          + "Users "
          + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, UserName TEXT, Password Text);"
      )
  })
}

const getData = () => {
  try {

      db.transaction((tx) => {
          tx.executeSql(
              "SELECT UserName, Password FROM Users",
              [],
              (tx, results) => {
                  var len = results.rows.length;
                  if (len > 0) {
                      navigation.navigate('MenuScreen');
                  }
              }
          )
      })
  } catch (error) {
      console.log(error);
  }
}
const setData = async () => {
  if (username.length == 0 || password.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
  } else {
      try {

          await db.transaction(async (tx) => {

              await tx.executeSql(
                  "INSERT INTO Users (UserName, Password) VALUES (?,?)",
                  [name, age]
              );
          })
          navigation.navigate('MenuScreen');
      } catch (error) {
          console.log(error);
      }
  }
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

    <CustomButton text="Sign In" onPress={onSignInPressed} />
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
