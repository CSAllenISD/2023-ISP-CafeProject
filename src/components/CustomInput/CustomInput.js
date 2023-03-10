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

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
});

export default CustomInput