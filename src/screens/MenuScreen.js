import React, {useState} from 'react';
import  {Text, View, StyleSheet, Image, Alert, Button, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Mynerve_400Regular } from '@expo-google-fonts/mynerve';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import Dialog from "react-native-dialog";



const Menu = () => {
  
  const [visible, setVisible] = useState(false);
  const addToCart = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const handleAdd = () => {
 
    setVisible(false);
  };

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
      <Dialog.Container visible={visible}>
        <Dialog.Title>Item Quantity</Dialog.Title>
        <Dialog.Description>
          How many do you want to add?
        </Dialog.Description>
        <Dialog.Input>
        1
        </Dialog.Input>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Add" onPress={handleAdd} />
      </Dialog.Container>



      
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


export default Menu