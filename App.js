import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
export default function App() {
  const [todo, setTodo] = useState([
    { name: "rashka", key: "1" },
    { name: "abd", key: "2" },
    { name: "cade", key: "3" },
    { name: "Boy", key: "4" },
    { name: "Suldan", key: "5" }
  ]);
  const handleItems = key => {
    setTodo(prevtodo => {
      return prevtodo.filter(todo => todo.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddTodo />
      <View style={styles.content}>
        <AddTodo />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} handleItems={handleItems} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a19e3",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    marginTop: 50,
    position: "relative"
  },
  item: {
    backgroundColor: "orange",
    padding: 10,
    marginTop: 10,
    width: 350,
    color: "white"
  }
});
