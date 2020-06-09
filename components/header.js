import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header : {
        height : 80,
        backgroundColor : 'red'
    },
    title : {
        marginTop : 45,
        fontWeight : "bold",
        textAlign : "center",
        fontSize : 24,
        color : "white"
    }
})