import React, {useState} from 'react';
import  {Text, View, StyleSheet, Image, Alert, Button, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Mynerve_400Regular } from '@expo-google-fonts/mynerve';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import Dialog from "react-native-dialog";
export default function MenuScreen({ navigation }) {
  

  let [fontsLoaded] = useFonts({
    Mynerve_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const onCartPressed =() => {
    navigation.navigate("Checkout")


  }

  return (

      <View style = {styles.body}>
  //PUT SCROLL VIEW HERE
            <CustomButton text="Go to Checkout" onPress={onCartPressed} />

          <Text style = {styles.food}> ENTREE</Text>
          <Image
          style = {styles.image}
          source={require('../../assets/images/chicken_burger.jpg')}
          />
              <Text style = {styles.description}> Chicken Sandwich</Text>
              <Text style = {styles.price}> Price: $2.75</Text>
              <Text style = {styles.price}> Item #: 100 </Text>

//SCROLL VIEW END HERE
     
    </View>


  );
};
const styles = StyleSheet.create({
  header: {
      fontSize:50,
      fontWeight: "bold",
      textAlign: "center",
      textDecorationLine: "underline",
  },     
  image: {
      height: "50%",
      width: "100%",
      resizeMode: "cover",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
  },

  body: {

      borderColor: "gold",
      backgroundColor: "gold",
  },
  food: {
  color: "red",
  fontWeight: "500",
  fontFamily: "Mynerve_400Regular",
  fontSize: 30,
  textAlign: "center",
  padding: 20,
  
  },
  description: {
      color: "black",
      fontStyle: "italic",
      fontWeight: "500",
      fontFamily: "Mynerve_400Regular",
      fontSize: 25,
      textAlign: "center",
      padding: 20,
      },
      price: {
        color: "black",
        fontStyle: "italic",
        fontWeight: "500",
        fontFamily: "Mynerve_400Regular",
        fontSize: 20,
        textAlign: "center",
        padding: 10,
        }
});
