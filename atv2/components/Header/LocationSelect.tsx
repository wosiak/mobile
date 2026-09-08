import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LocationSelect() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current location</Text>
      <Feather name="chevron-down" size={16} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});
