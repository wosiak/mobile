import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function MapPreview() {
  return (
    // Caixa do mapa. O aspectRatio define a altura a partir da largura,
    // então o card se adapta ao tamanho da tela sem altura fixa.
    <View style={styles.container}>
      {/* Os três pins ficam espalhados na horizontal com space-around */}
      <Entypo name="location-pin" size={40} color="#1a1a1a" />
      <Entypo name="location-pin" size={52} color="#12503c" />
      <Entypo name="location-pin" size={40} color="#1a1a1a" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f1ea",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eae5dc",
    aspectRatio: 16 / 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
