import React , {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default function AddTodo({addItem}) {
    const [input , changeInput] = useState('');

    const handleChange = val => {
        changeInput(val);
    };

    return(
        <View>
            <TextInput placeholder="Add Todo..." style={styles.inputField} onChangeText={handleChange} />
            <Button title="Add Todo" onPress={() => addItem(input)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputField : {
        borderWidth : 1,
        borderColor : "grey",
        borderStyle : "solid",
        marginVertical : 2,
        paddingHorizontal : 10
    }
})

