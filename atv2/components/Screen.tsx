import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import Filters from "./Filters";
import Footer from "./Footer";
import Header from "./Header";
import NearYou from "./NearYou";
import PrimaryButton from "./PrimaryButton";
import TopPicks from "./TopPicks";

export default function Screen() {
  return (
    // A tela toda é uma coluna. O ScrollView do meio tem flex: 1,
    // então ele ocupa o espaço que sobra entre os filtros e o botão.
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Topo fixo: localização, busca, abas e filtros */}
      <Header />
      <Filters />

      {/* Conteúdo que rola */}
      <ScrollView style={styles.content}>
        <NearYou />
        <TopPicks />
      </ScrollView>

      {/* Rodapé fixo: botão de ação e barra de navegação */}
      <PrimaryButton label="Select Starter" />
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
