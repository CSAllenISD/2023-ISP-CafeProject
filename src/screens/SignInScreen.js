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

  /*const onSignInPressed =() => {
    if (username.trim().length !== 0 && (password.trim().length !==0)) {
      const getCount = new Promise(function(resolve, reject) {
        var countList = [] ;
        let db = SQLite.openDatabase({name: 'test.db', createFromLocation : "~example.db", location: 'Library'}, false,false);
      db.transaction((tx) => {
        tx.executeSql('SELECT COUNT() FROM login WHERE username = ? AND password = ?', [username, password], (tx, results) => {
          console.log(results);
          var len = results.rows.length;
        for (let i = 0; i < len; i++) {
            let row = results.rows.item(i); 
            employeeList.push(row.name);        
        }
        db.closeDatabase();

        // resolve promise
        resolve(employeeList)
        });
          //Alert.alert(String(results));
          //print(results)
          //let resultingArray = results.array
          //if (countList.length > 0) {
            //console.log("Query completed");
          //'IF EXISTS(SELECT * FROM login WHERE username = "Lin" and password = "Lin")',
          //'BEGIN',
          //'INSERT INTO login (username, password) VALUES (?,?)',
          //'END',
          //'SELECT * FROM login WHERE username = "Lin" and password = "Lin"',
          //'INSERT INTO login (username, password) VALUES (?,?)',
          //[newUsername, newPassword],
          //(tx, results) => {
            //console.log("completed");
            //console.log('Accounts', results.rowsAffected);
            //if (results.rowsAffected > 0) {
           // navigation.navigate("Menu") }
            //}
            //else {
              //Alert.alert('Username or Password is not registered.');
            //}
      });

          getCount.then(data => {
            this.setState({
                count:countList
            })
          })
      });
        if (countList.length > 0) {
          navigation.navigate("Menu") 
        }
        else
        {
          Alert.alert('Username or Password is not registered.');
        }
          
        //);
        //});
        
    }; 
    else {Alert.alert('Invalid username or password', '', [
      {text: 'OK'},
    ]);
  }
}*/
const onSignInPressed =() => {
  if (username.trim().length !== 0 && (password.trim().length !==0)) {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], (tx, results) => {
        Alert.alert(String(results));
        console.log(results);
        if (results == "[object Object]") {
          //console.log("Query completed");
        //'IF EXISTS(SELECT * FROM login WHERE username = "Lin" and password = "Lin")',
        //'BEGIN',
        //'INSERT INTO login (username, password) VALUES (?,?)',
        //'END',
        //'SELECT * FROM login WHERE username = "Lin" and password = "Lin"',
        //'INSERT INTO login (username, password) VALUES (?,?)',
        //[newUsername, newPassword],
        //(tx, results) => {
          //console.log("completed");
          //console.log('Accounts', results.rowsAffected);
          //if (results.rowsAffected > 0) {
          navigation.navigate("Menu") }
          //}
          else {
            Alert.alert('Username or Password is not registered.');
          }
        }
        
      );
      });
      
    } else {
      Alert.alert('Invalid username or password', '', [

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
    <CustomButton text="Sign Up" onPress={onSignUpPressed} />
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