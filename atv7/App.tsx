import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SectionList, Text, View } from 'react-native';
import { groupByCategory, Motorcycle } from './helpers/groupByCategory';
import motorcycles from './mocks/motorcycles.json';
import { styles } from './styles/listStyles';

// O agrupamento roda UMA vez, quando o arquivo é carregado. Como os dados são
// fixos, não faz sentido reagrupar os 1000 itens a cada redesenho da tela.
const sections = groupByCategory(motorcycles as Motorcycle[]);

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Catálogo de Motocicletas</Text>

      {/* SectionList é a lista do React Native feita para dados agrupados:
          ela já sabe desenhar cabeçalho e rodapé por seção. */}
      <SectionList
        sections={sections}
        // O id de cada moto é único, então serve de chave
        keyExtractor={(item) => item.id}
        // Cabeçalho da categoria. Fica grudado no topo enquanto a seção rola.
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        // Um item da lista: modelo, marca e ano
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.model}>{item.model}</Text>
            <Text style={styles.details}>
              {item.brand} · {item.year}
            </Text>
          </View>
        )}
        // Desafio extra: total de motos da categoria, no fim de cada seção
        renderSectionFooter={({ section }) => (
          <Text style={styles.sectionFooter}>
            Total: {section.data.length} motocicletas
          </Text>
        )}
        stickySectionHeadersEnabled
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
