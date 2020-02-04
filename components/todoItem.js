import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, handleItems }) {
  return (
    <TouchableOpacity onPress={()=> handleItems(item.key)}>
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  header: {
    position: "relative",
    top: 40,
    height: 40,
    paddingTop: 8,
    backgroundColor: "coral"
  },
  title: {
    width: 700,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  item: {
    backgroundColor: "orange",
    padding: 10,
    marginTop:10,
    width:350,
    color: 'white'
  }
});
