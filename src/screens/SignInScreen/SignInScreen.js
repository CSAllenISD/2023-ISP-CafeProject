import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Button } from 'react-native';
import Logo from '../../../assets/images/projectLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const SignInScreen = () => {
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
const Stack = createNativeStackNavigator();
function App() {
    return (
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="The Cafe Project" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App