import React from "react";
import { StyleSheet, View } from "react-native";
import LocationSelect from "./LocationSelect";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <View style={styles.container}>
      <LocationSelect />
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f2e6",
    paddingTop: 24,
    paddingBottom: 16,
    gap: 16,
    paddingHorizontal: 16,
  },
});
