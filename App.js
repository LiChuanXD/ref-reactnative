import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { render } from 'react-dom';

import Header from './components/header';
import TodoList from './components/listItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos , setTodo] = useState([
    {todo : "Eat" , id : "1"},
    {todo : "Sleep" , id : "2"},
    {todo : "Drink" , id : "3"},
    {todo : "Code" , id : "4"},
    {todo : "Repeat" , id : "5"},
  ]);

  const deleteItem = id => {
    setTodo((prevState) => {
      return prevState.filter(x => x.id !== id)
    })
  };

  const addItem = text => {
    if(text.length > 1){
      setTodo((prevState) => {
        return [
          ...prevState,
          {todo : text , id : Math.random().toString()}
        ]
      })
    }else{
      Alert.alert("Error" , "Please enter something" , [{text : "Understood" , onPress : () => console.log("closed")}])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />

        <View style={styles.main}>
          <AddTodo addItem={addItem} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={x => x.id}
              data={todos}
              renderItem={({ item }) => (<TodoList item={item} deleteItem={deleteItem} />)}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  main : {
    padding : 10,
    flex : 1
  },
  list : {
    marginTop : 20,
    padding : 15,
    flex : 1
  }
});
