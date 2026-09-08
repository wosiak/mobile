import React from "react";
import { StyleSheet, Text, View } from "react-native";

type PrimaryButtonProps = {
  label: string;
};

export default function PrimaryButton({ label }: PrimaryButtonProps) {
  return (
    // O botão fica preso na parte de baixo da tela, acima da barra de navegação.
    // Como está numa coluna flex, não precisa de position absolute pra "flutuar".
    <View style={styles.wrapper}>
      <View style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: "#e0446d",
    borderRadius: 28,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
