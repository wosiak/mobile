import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gym } from "../gyms";

export default function GymCard({ gym }: { gym: Gym }) {
  return (
    // O card é uma coluna: logo, nome, nota e distância, tudo centralizado
    <View style={styles.container}>
      {/* Quadrado da logo. O aspectRatio deixa ele quadrado sem altura fixa */}
      <View style={[styles.logo, { backgroundColor: gym.logoColor }]}>
        <Text style={[styles.initials, { color: gym.initialsColor }]}>
          {gym.initials}
        </Text>
      </View>

      {/* numberOfLines corta o nome com "..." quando é comprido, como no print */}
      <Text style={styles.name} numberOfLines={2}>
        {gym.name}
      </Text>

      {/* Linha da avaliação: estrela + nota */}
      <View style={styles.infoRow}>
        <FontAwesome name="star" size={14} color="#f5b400" />
        <Text style={styles.infoText}>{gym.rating.toFixed(2)}</Text>
      </View>

      {/* Linha da distância: pin + km */}
      <View style={styles.infoRow}>
        <Entypo name="location-pin" size={14} color="#4a4a4a" />
        <Text style={styles.infoText}>{gym.distance.toFixed(1)} km</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 96,
    alignItems: "center",
    gap: 6,
  },
  logo: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#eae5dc",
  },
  initials: {
    fontWeight: "bold",
    fontSize: 20,
  },
  name: {
    fontSize: 14,
    color: "#1a1a1a",
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  infoText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#1a1a1a",
  },
});
