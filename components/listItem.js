import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function TodoList({ item , deleteItem}) {
    return(
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <View style={styles.todo}>
                <AntDesign name="checkcircleo" size={20} />
                <Text style={styles.todoText}>{item.todo}</Text>
            </View>
            
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo : {
        borderColor : 'grey',
        borderStyle : 'solid',
        borderWidth : 1,
        marginTop : 10,
        paddingHorizontal : 8,
        paddingVertical : 5 ,
        borderRadius : 15,
        flexDirection : "row"
    },
    todoText : {
        marginLeft : 10
    }
});