import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import GymCard from "./GymCard";
import MapPreview from "./MapPreview";

// Academias exibidas no carrossel
const gyms = [
  {
    name: "Academia Stylo Fitness",
    rating: 4.9,
    distance: 1.6,
    logoColor: "#2b2b2b",
    initials: "SF",
    initialsColor: "#e8b64c",
  },
  {
    name: "Academia Extreme",
    rating: 4.51,
    distance: 3.0,
    logoColor: "#111c3a",
    initials: "X",
    initialsColor: "#2fe0a6",
  },
  {
    name: "BJ FIT",
    rating: 4.83,
    distance: 3.4,
    logoColor: "#000000",
    initials: "BJ",
    initialsColor: "#f5c518",
  },
  {
    name: "Academia Templo Fitness",
    rating: 4.52,
    distance: 6.6,
    logoColor: "#fdf6e8",
    initials: "TF",
    initialsColor: "#c08a2e",
  },
  {
    name: "Academia Hard",
    rating: 4.62,
    distance: 6.6,
    logoColor: "#5c5c66",
    initials: "AH",
    initialsColor: "#ffffff",
  },
];

export default function NearYou() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho da seção: título na esquerda e "See all" na direita.
          O space-between empurra um pra cada ponta da linha. */}
      <View style={styles.header}>
        <Text style={styles.title}>Near you</Text>
        <Text style={styles.link}>See all</Text>
      </View>

      {/* Carrossel horizontal com um GymCard por academia */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {gyms.map((gym, index) => (
          <GymCard
            key={index}
            name={gym.name}
            rating={gym.rating}
            distance={gym.distance}
            logoColor={gym.logoColor}
            initials={gym.initials}
            initialsColor={gym.initialsColor}
          />
        ))}
      </ScrollView>

      {/* Prévia do mapa, com um respiro nas laterais */}
      <View style={styles.mapWrapper}>
        <MapPreview />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 24,
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eae5dc",
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
  mapWrapper: {
    paddingHorizontal: 16,
  },
});
