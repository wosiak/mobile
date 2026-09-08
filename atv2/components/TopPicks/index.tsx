import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import GymCard from "../NearYou/GymCard";

// Reaproveita o mesmo GymCard da seção "Near you", só com outros dados
const picks = [
  {
    name: "Academia Extreme",
    rating: 4.51,
    distance: 3.0,
    logoColor: "#111c3a",
    initials: "X",
    initialsColor: "#2fe0a6",
  },
  {
    name: "Academia Stylo Fitness",
    rating: 4.9,
    distance: 1.6,
    logoColor: "#2b2b2b",
    initials: "SF",
    initialsColor: "#e8b64c",
  },
  {
    name: "BJ FIT",
    rating: 4.83,
    distance: 3.4,
    logoColor: "#000000",
    initials: "BJ",
    initialsColor: "#f5c518",
  },
];

export default function TopPicks() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top picks for you</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {picks.map((pick, index) => (
          <GymCard
            key={index}
            name={pick.name}
            rating={pick.rating}
            distance={pick.distance}
            logoColor={pick.logoColor}
            initials={pick.initials}
            initialsColor={pick.initialsColor}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 32,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    paddingHorizontal: 16,
  },
  carousel: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 16,
  },
});
