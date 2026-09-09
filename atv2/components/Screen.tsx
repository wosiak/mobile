import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import FilterChips from "./FilterChips";
import Footer from "./Footer";
import Header from "./Header";
import MapPreview from "./MapPreview";
import NearYou from "./NearYou";
import SelectButton from "./SelectButton";

export default function Screen() {
  return (
    // A tela é uma coluna. O ScrollView do meio tem flex: 1, então ocupa
    // todo o espaço que sobra e empurra o botão e o rodapé para baixo.
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Header />
      <FilterChips />

      <ScrollView style={styles.content}>
        <NearYou />
        <MapPreview />
      </ScrollView>

      <SelectButton />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});
