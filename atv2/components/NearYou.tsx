import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Academias exibidas no carrossel. As cores fazem o papel da logo.
const gyms = [
  { name: "Academia Stylo Fitness", rating: 4.9, distance: 1.6, color: "#2b2b2b", initials: "SF", textColor: "#e8b64c" },
  { name: "Academia Extreme", rating: 4.51, distance: 3.0, color: "#111c3a", initials: "X", textColor: "#2fe0a6" },
  { name: "BJ FIT", rating: 4.83, distance: 3.4, color: "#000000", initials: "BJ", textColor: "#f5c518" },
  { name: "Academia Templo Fitness", rating: 4.52, distance: 6.6, color: "#fdf6e8", initials: "TF", textColor: "#c08a2e" },
  { name: "Academia Hard", rating: 4.62, distance: 6.6, color: "#5c5c66", initials: "AH", textColor: "#ffffff" },
];

export default function NearYou() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho da seção. O space-between joga o título numa ponta
          da linha e o "See all" na outra. */}
      <View style={styles.header}>
        <Text style={styles.title}>Near you</Text>
        <Text style={styles.link}>See all</Text>
      </View>

      {/* Carrossel: ScrollView horizontal com um card por academia */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {gyms.map((gym, index) => (
          // Cada card é uma coluna centralizada
          <View key={index} style={styles.card}>
            {/* Quadrado da logo. O aspectRatio deixa ele quadrado
                sem precisar de altura fixa. */}
            <View style={[styles.logo, { backgroundColor: gym.color }]}>
              <Text style={[styles.initials, { color: gym.textColor }]}>
                {gym.initials}
              </Text>
            </View>

            {/* numberOfLines corta o nome comprido com "...", como no print */}
            <Text style={styles.name} numberOfLines={2}>
              {gym.name}
            </Text>

            {/* Linha da nota: estrela + número */}
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
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 24,
    gap: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  link: {
    fontSize: 15,
    color: "#1a1a1a",
    textDecorationLine: "underline",
  },
  carousel: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 16,
  },
  card: {
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
    fontSize: 20,
    fontWeight: "bold",
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
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
});
