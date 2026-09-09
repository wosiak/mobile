import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { gyms } from "../gyms";
import GymCard from "./GymCard";
import MapPreview from "./MapPreview";

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
          <GymCard key={index} gym={gym} />
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
