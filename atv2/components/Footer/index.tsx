import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function Footer() {
  return (
    // Barra de navegação: os três botões dividem a largura com space-around
    <View style={styles.container}>
      <Button icon="check-circle" label="Check in" />
      <Button icon="search" label="Explore" active />
      <Button icon="user" label="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eae5dc",
  },
});
