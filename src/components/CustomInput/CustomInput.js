import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeHolder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            Value={value}
            onChangeText={setValue}
            placeholder={placeHolder} 
            style={styles.input} 
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: 'lightblue',
        borderWidth: 5,
        borderRadius: 10,

        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {},
});

export default CustomInput