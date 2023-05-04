
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import MenuScreen from './src/screens/MenuScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckoutScreen from './src/screens/CheckoutScreen';
//import ConfirmationScreen from './src/screens/ConfirmationScreen';
//import { styles } from './styles';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={SignInScreen}
          options={{title: "The Cafe Project"}}
        />
        <Stack.Screen 
          name="Menu"
          component={MenuScreen}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}