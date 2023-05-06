import React, {useState} from 'react';
import  {Dimensions, Text, View, StyleSheet, Image, Alert, Button, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Mynerve_400Regular } from '@expo-google-fonts/mynerve';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import Dialog from "react-native-dialog";
import QRCode from "react-qr-code";



export default function ConfirmationScreen({ navigation }) {
  
    let [fontsLoaded] = useFonts({
      Mynerve_400Regular,
    });
    if (!fontsLoaded) {
      return null;
    }
return (
          <View style={styles.main}>
         <Text style={styles.padding}></Text>
               <Image
            style = {styles.image}
            source={require('../../assets/images/order_confirmation.png')}
            />
          <Text style={styles.header}> Your order has been placed!</Text>
          <QRCode 
            size={200}
            bgColor="lightblue"
            fgColor='black'
            value='https://www.allenisd.org/domain/1978'
            alignSelf= "center"

          />
          </View>
    );
    
  };
  const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "lightblue",
        alignContent: "center",
    },
   padding: {
    padding: 5,
   },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        padding: 30,
    },
    image: {
        height: 100,
        width: 100,
        alignSelf: "center",
      
    },
  })