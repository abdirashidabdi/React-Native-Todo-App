import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top:40,
    height: 40,
    paddingTop: 8,
    backgroundColor: "coral",
    
  },
  title: {
    width: 700,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});
