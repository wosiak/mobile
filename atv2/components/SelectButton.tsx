import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SelectButton() {
  // O botão fica preso embaixo, acima da barra de navegação. Como a tela é
  // uma coluna flex, isso vem da ordem dos elementos, sem position absolute.
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.label}>Select Starter</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: "#e0446d",
    borderRadius: 28,
    paddingVertical: 18,
    // Centraliza o texto nos dois sentidos
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
