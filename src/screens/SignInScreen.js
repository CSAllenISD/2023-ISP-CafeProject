import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Button } from 'react-native';
import Logo from '../../assets/images/projectLogo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
export default function SignInScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed =() => {
      console.warn("Sign In");
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

           <CustomButton text="Sign In" onPress={() => navigation.navigate("Menu")} />
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
