import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ButtonProps = {
  // Nome do ícone da biblioteca Feather
  icon: keyof typeof Feather.glyphMap;
  label: string;
  // Marca a aba em que o usuário está agora
  active?: boolean;
};

export default function Button({ icon, label, active = false }: ButtonProps) {
  // Operador ternário: a aba ativa fica rosa, as outras cinza escuro
  const color = active ? "#e0446d" : "#4a4a4a";

  return (
    <View style={styles.container}>
      <Feather name={icon} size={22} color={color} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 13,
  },
});
