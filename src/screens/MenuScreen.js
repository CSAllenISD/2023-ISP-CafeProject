import React, {useState} from 'react';
import  {Dimensions, Text, View, StyleSheet, Image, Alert, Button, ScrollView, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Mynerve_400Regular } from '@expo-google-fonts/mynerve';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import Dialog from "react-native-dialog";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width - 40;

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

  //const Flex = () => {
  return (
    <View style={styles.body}>
     <ScrollView 
     style={styles.main}
     contentContainerStyle={{flexGrow:1, paddingBottom: 10}}>
     
          <CustomButton text="Go to Checkout" onPress={onCartPressed} />
            <Text style = {styles.food}> ENTREE</Text>
            <Image
            style = {styles.image}
            source={require('../../assets/images/chicken_burger.jpg')}
            />
            <Text style = {styles.description}> Chicken Sandwich</Text>
            <Text style = {styles.price}> Price: $2.75</Text>
            <Text style = {styles.itemNum}> Item #: 1 </Text> 


            <Image
            style = {styles.image}
            source={require('../../assets/images/spicyChickenwhich.png')}
            />
            <Text style = {styles.description}> Spicy Chicken Sandwich</Text>
            <Text style = {styles.price}> Price: $2.75</Text>
            <Text style = {styles.itemNum}> Item #: 2 </Text> 


            <Image
            style = {styles.image}
            source={require('../../assets/images/chicken_tenders.jpg')}
            />
            <Text style = {styles.description}> Homestyle Chicken Tenders</Text>
            <Text style = {styles.price}> Price: $2.85</Text>
            <Text style = {styles.itemNum}> Item #: 3 </Text> 


            
            <Image
            style = {styles.image}
            source={require('../../assets/images/chickenTenderCombo.png')}
            />
            <Text style = {styles.description}> Chicken Tender Combo</Text>
            <Text style = {styles.price}> Price: $4.75</Text>
            <Text style = {styles.itemNum}> Item #: 4 </Text> 


            <Image
            style = {styles.image}
            source={require('../../assets/images/chickenSandwichCombo.png')}
            />
            <Text style = {styles.description}> Chicken Sandwich Combo</Text>
            <Text style = {styles.price}> Price: $4.50</Text>
            <Text style = {styles.itemNum}> Item #: 5 </Text> 


            <Text style = {styles.food}> Sides</Text>

            <Image
            style = {styles.image}
            source={require('../../assets/images/fries.png')}
            />
            <Text style = {styles.description}> Fries</Text>
            <Text style = {styles.price}> Price: $1.50</Text>
            <Text style = {styles.itemNum}> Item #: 6</Text> 


            <Image
            style = {styles.image}
            source={require('../../assets/images/gardenSalad.png')}
            />
            <Text style = {styles.description}> Garden Style Salad</Text>
            <Text style = {styles.price}> Price: $1.40</Text>
            <Text style = {styles.itemNum}> Item #: 7</Text> 


            <Image
            style = {styles.image}
            source={require('../../assets/images/schoolDinnerRoll.png')}
            />
            <Text style = {styles.description}> Sweet Dinner Roll</Text>
            <Text style = {styles.price}> Price: $0.65</Text>
            <Text style = {styles.itemNum}> Item #: 8</Text> 

            </ScrollView>        
            </View>
  );
  
};

const styles = StyleSheet.create({
 main: {
  flex: 1,
 },
  header: {
      fontSize:50,
      fontWeight: "bold",
      textAlign: "center",
      textDecorationLine: "underline",
  },     
  image: {
      height: imageHeight,
      //width: "100%",
      //justifyContent: 'center',
      maxWidth: imageWidth,
      //maxHeight: "200",
      //resizeMode: "cover",
      marginLeft: 20,
      marginRight: 20,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
  },

  body: {

      borderColor: "gold",
      backgroundColor: "gold",
      flex: 1,
  },
  food: {
  color: "red",
  fontWeight: "500",
  fontFamily: "Mynerve_400Regular",
  fontSize: 40,
  textAlign: "center",
  padding: 20,
  textDecorationLine: 'underline',
  marginBottom: 35,
  },
  description: {
      color: "black",
      fontStyle: "italic",
      fontWeight: "500",
      fontFamily: "Mynerve_400Regular",
      fontSize: 25,
      textAlign: "center",
      padding: 10,
      },
      price: {
        color: "black",
        fontStyle: "italic",
        fontWeight: "500",
        fontFamily: "Mynerve_400Regular",
        fontSize: 20,
        textAlign: "center",
        padding: 5,
        },
        itemNum: {
          color: "black",
          fontStyle: "italic",
          fontWeight: "500",
          fontFamily: "Mynerve_400Regular",
          fontSize: 20,
          textAlign: "center",
          padding: 10,
          marginBottom: 35,
          },
 
});