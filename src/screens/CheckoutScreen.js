import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as SQLite from 'expo-sqlite';
import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function CartScreen({ navigation }) {
    const db = SQLite.openDatabase('MenuItems.db')
      const [isLoading, setIsLoading] = useState(true);
      const [items, setItems] = useState([]);
      const [currentItem, setCurrentItem] = useState(undefined);
      const [price, setPrice] = useState([]);
      const [currentprice, setCurrentPrice] = useState(undefined);
     
      useEffect(() => {
        db.transaction(tx => {
          tx.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, number INTEGER, item TEXT, price TEXT)')
      
        });
    
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM items', null,
            (txObj, resultSet) => setItems(resultSet.rows._array),
            (txObj, error) => console.log(error)
          );
        });
    
          setIsLoading(false)
        },[]);
        const confirmOrder = () => {
            navigation.navigate("Menu")
            navigation.navigate("Checkout")
            //navigation.navigate("Confirmation")
          };
          
      if (isLoading) {
        return (
            <View style={styles.container}>
                <Text>Loading ...</Text>
                </View>
        );
      }
 //     if (currentItem == "100") {
   //     return (
     //       <View>
       //     <Text>Burger</Text>
         //   </View>
       // )
     // }

   
  

      



      const addItem = () => {
       if (currentItem == "100") {
        db.transaction(tx => {
          tx.executeSql('INSERT INTO items (number, item, price) values (?,?,?)', [ "100", "Burger", "$2.75"],
            (txObj, resultSet) => {
              let existingItems = [...items];
           
              existingItems.push({ id: resultSet.insertId, Item: currentItem});
              setItems(existingItems);
              setCurrentItem(undefined);
             
              navigation.navigate("Menu")
              navigation.navigate("Checkout")
            },
            (txObj, error) => console.log(error)
          );
        });
     }
        
      }





      const deleteItem = (id) => {
        db.transaction(tx => {
          tx.executeSql('DELETE FROM items WHERE id = ?', [id],
            (txObj, resultSet) => {
              if (resultSet.rowsAffected > 0) {
                let existingItems = [...items].filter(item => item.id !== id);
                setItems(existingItems);
              }
            },
            (txObj, error) => console.log(error)
          );
        });
      };
      
      
      const showItemsAndPrice = () => {
        return items.map((item, price, index)  => {
          return (
            <View key={item} style={styles.row}>
             
              <Text>Item : {item.item}</Text>
              <Text>Price : {item.price}</Text>
  
              <Button title='Delete' onPress={() => deleteItem(item.id)} />
     
            </View>
          );
        });
      };

 
    

     
      
    return (
        
        <View style={styles.container}>
            
            <TextInput value={currentItem} placeholder="item" onChangeText={setCurrentItem} />
            
            <Button title="Add Item" onPress={addItem} />
            <Button title="Confirm Order" onPress={confirmOrder} />
            
      {showItemsAndPrice()}

        <StatusBar style="auto" />
        </View>
    
);

    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            margin: 8
        }
    });