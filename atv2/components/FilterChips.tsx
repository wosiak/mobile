import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Filtros da tela. O primeiro é o que está selecionado no print (fundo preto).
const filters = [
  { label: "Starter • R$ 36,70", selected: true },
  { label: "Activities", selected: false },
];

export default function FilterChips() {
  return (
    // Linha (row): os chips ficam lado a lado, com gap entre eles
    <View style={styles.container}>
      {filters.map((filter, index) => {
        // Ternário: no chip selecionado o texto e o ícone ficam brancos
        const color = filter.selected ? "#fff" : "#1a1a1a";

        return (
          <View
            key={index}
            style={[styles.chip, filter.selected ? styles.selected : styles.normal]}
          >
            <Text style={[styles.label, { color }]}>{filter.label}</Text>
            <Feather name="chevron-down" size={16} color={color} />
          </View>
        );
      })}
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
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  selected: {
    backgroundColor: "#1a1a1a",
  },
  normal: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cfcac2",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
