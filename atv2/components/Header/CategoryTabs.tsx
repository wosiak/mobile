import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Lista de abas. A primeira é a que está selecionada no print.
const tabs = ["All", "Gyms and studios", "Classes", "Apps", "Private trainers"];
const activeTab = "All";

export default function CategoryTabs() {
  return (
    // ScrollView horizontal: as abas passam da largura da tela e podem ser arrastadas
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {tabs.map((tab, index) => {
        const isActive = tab === activeTab;

        return (
          // Cada aba é uma coluna: o texto em cima e a barrinha embaixo
          <View key={index} style={styles.tab}>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab}
            </Text>

            {/* A barrinha preta só é desenhada na aba ativa */}
            {isActive && <View style={styles.underline} />}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdfaf2",
  },
  content: {
    paddingHorizontal: 16,
    gap: 28,
  },
  tab: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    gap: 12,
  },
  label: {
    fontSize: 15,
    color: "#6b6b6b",
  },
  labelActive: {
    color: "#1a1a1a",
    fontWeight: "bold",
  },
  underline: {
    backgroundColor: "#1a1a1a",
    height: 3,
    alignSelf: "stretch",
    borderRadius: 2,
  },
});
