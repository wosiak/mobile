import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import GymCard from "../NearYou/GymCard";
import { gyms } from "../gyms";

// "Top picks" são as academias melhor avaliadas: a mesma lista, ordenada pela nota.
// O [...gyms] cria uma copia, para o sort nao mexer na ordem da lista original.
const topPicks = [...gyms].sort((a, b) => b.rating - a.rating);

export default function TopPicks() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top picks for you</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {topPicks.map((gym, index) => (
          <GymCard key={index} gym={gym} />
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
