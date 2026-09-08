import React from "react";
import { StyleSheet, View } from "react-native";
import Chip from "./Chip";

export default function Filters() {
  return (
    // Linha de filtros: os chips ficam lado a lado, alinhados à esquerda
    <View style={styles.container}>
      <Chip label="Starter • R$ 36,70" filled />
      <Chip label="Activities" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eae5dc",
  },
});
