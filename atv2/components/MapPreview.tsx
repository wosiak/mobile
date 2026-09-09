import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function MapPreview() {
  return (
    <View style={styles.container}>
      {/* Caixa do mapa. O space-around espalha os três pins na horizontal
          e o aspectRatio define a altura a partir da largura. */}
      <View style={styles.map}>
        <Entypo name="location-pin" size={40} color="#1a1a1a" />
        <Entypo name="location-pin" size={52} color="#12503c" />
        <Entypo name="location-pin" size={40} color="#1a1a1a" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  map: {
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
