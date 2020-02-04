import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
const [add, setText] = useState("");
const changeHandler = val => {
  setText(val);
};
export default function AddTodo() {
  return (
    <View>
      <TextInput
        style={StyleSheet.input}
        placeholder="Add Task.."
        onChange={changeHandler}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 10,
    width: 350
  }
});
