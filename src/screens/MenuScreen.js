import React from 'react';
import  {Text, View, StyleSheet, Image, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Mynerve_400Regular } from '@expo-google-fonts/mynerve';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
const addToCart =() => {
  Alert.alert('Item Added Sucessfully', '', [

    {text: 'OK'},
  ]);
}
const Menu = () => {
  let [fontsLoaded] = useFonts({
    Mynerve_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    
      <View style = {styles.body}>
          <Text style = {styles.food}> ENTREE</Text>
          <Image
          style = {styles.image}
          source={require('../../assets/images/chicken_burger.jpg')}
          />
              <Text style = {styles.description}> Chicken Sandwich</Text>
              <Text style = {styles.price}> Price: $2.75</Text>
             <CustomButton text="Add to Cart" onPress={addToCart} />
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
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,

  },

  body: {
      borderWidth: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
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


export default Menu