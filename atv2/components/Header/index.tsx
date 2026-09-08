import React from "react";
import { StyleSheet, View } from "react-native";
import CategoryTabs from "./CategoryTabs";
import LocationSelect from "./LocationSelect";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <View>
      {/* Parte de cima, com o fundo creme: localização e busca */}
      <View style={styles.top}>
        <LocationSelect />
        <SearchBar />
      </View>

      {/* Abas de categoria, logo abaixo da busca */}
      <CategoryTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#f8f2e6",
    paddingTop: 24,
    paddingBottom: 16,
    gap: 16,
    paddingHorizontal: 16,
  },
});
