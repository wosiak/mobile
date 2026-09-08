import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <AntDesign name="arrow-left" size={24} color="black" />
      </View>

      <View style={styles.search}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput placeholder="Gyms, studios, activities" placeholderTextColor="#a39d96" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },
  back: {
    backgroundColor: "#e1ded9",
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 16,
    borderColor: "#e1ded9",
    borderWidth: 1,
    flex: 1,
  },
});
