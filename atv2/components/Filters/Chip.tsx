import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// O chip aparece em duas versões no print: preenchido (preto) e vazado (com borda)
type ChipProps = {
  label: string;
  filled?: boolean;
};

export default function Chip({ label, filled = false }: ChipProps) {
  // Operador ternário escolhendo a cor do texto conforme a versão do chip
  const textColor = filled ? "#fff" : "#1a1a1a";

  return (
    <View style={[styles.container, filled ? styles.filled : styles.outlined]}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      <Feather name="chevron-down" size={16} color={textColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  filled: {
    backgroundColor: "#1a1a1a",
  },
  outlined: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cfcac2",
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
